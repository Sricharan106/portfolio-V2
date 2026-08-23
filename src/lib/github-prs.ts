import { GITHUB_USERNAME } from "../app/data";

const GITHUB_API = "https://api.github.com";

export interface IPrDATA {
  title: string;
  html_url: string;
  repository_url: string;
  number: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  merged_at: string | null;
  state: string;
}

export interface IRepositoryData {
  name: string;
  full_name: string;
  html_url: string;
  owner: string;
  description: string | null;
  language: string | null;
  stars: number;
  image: string;
  prs: IPrDATA[];
  mergedPRCount: number;
  lastMergedAt: string | null;
}

export interface IOpenSourceData {
  totalMergedPRs: number;
  externalMergedPRs: number;
  repositoryCount: number;
  repositories: IRepositoryData[];
}

async function githubFetch<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `GitHub API error: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}

export async function getopensource(): Promise<IOpenSourceData> {
  // 1. Get all PRs
  const searchData = await githubFetch<{
    total_count: number;
    items: Array<{
      title: string;
      html_url: string;
      repository_url: string;
      number: number;
      created_at: string;
      updated_at: string;
      closed_at: string | null;
      state: string;
      pull_request?: {
        merged_at: string | null;
      };
    }>;
  }>(
    `${GITHUB_API}/search/issues?q=author:${GITHUB_USERNAME}+type:pr&per_page=100`,
  );

  // 2. Normalize PR data
  const prs: IPrDATA[] = searchData.items.map((pr) => ({
    title: pr.title,
    html_url: pr.html_url,
    repository_url: pr.repository_url,
    number: pr.number,
    created_at: pr.created_at,
    updated_at: pr.updated_at,
    closed_at: pr.closed_at,
    merged_at: pr.pull_request?.merged_at ?? null,
    state: pr.state,
  }));

  // 3. Only merged PRs
  const mergedPRs = prs.filter((pr) => pr.merged_at);

  const totalMergedPRs = mergedPRs.length;

  // 4. Group PRs by repository
  const grouped = new Map<string, IPrDATA[]>();

  for (const pr of mergedPRs) {
    const existing = grouped.get(pr.repository_url) ?? [];

    existing.push(pr);

    grouped.set(pr.repository_url, existing);
  }

  // 5. Fetch repositories IN PARALLEL
  const repositories = await Promise.all(
    [...grouped.entries()].map(async ([repositoryUrl, repositoryPRs]) => {
      const parts = repositoryUrl.split("/");

      const owner = parts[parts.length - 2];
      const repoName = parts[parts.length - 1];

      // Ignore repositories owned by you
      if (owner.toLowerCase() === GITHUB_USERNAME.toLowerCase()) {
        return null;
      }

      const repository = await githubFetch<{
        name: string;
        full_name: string;
        html_url: string;
        owner: {
          login: string;
        };
        description: string | null;
        language: string | null;
        stargazers_count: number;
      }>(`${GITHUB_API}/repos/${owner}/${repoName}`);

      // Sort PRs newest → oldest
      const sortedPRs = [...repositoryPRs].sort(
        (a, b) =>
          new Date(b.merged_at!).getTime() - new Date(a.merged_at!).getTime(),
      );

      return {
        name: repository.name,
        full_name: repository.full_name,
        html_url: repository.html_url,
        owner: repository.owner.login,
        description: repository.description,
        language: repository.language,
        stars: repository.stargazers_count,

        image: `https://opengraph.githubassets.com/1/${repository.full_name}`,

        prs: sortedPRs,
        mergedPRCount: sortedPRs.length,
        lastMergedAt: sortedPRs[0]?.merged_at ?? null,
      };
    }),
  );

  // 6. Remove repositories owned by you
  const validRepositories = repositories.filter(
    (repo): repo is IRepositoryData => repo !== null,
  );

  // 7. Most contributions first
  validRepositories.sort((a, b) => b.mergedPRCount - a.mergedPRCount);

  // 8. Return final data
  return {
    totalMergedPRs,

    externalMergedPRs: validRepositories.reduce(
      (total, repo) => total + repo.mergedPRCount,
      0,
    ),

    repositoryCount: validRepositories.length,

    repositories: validRepositories,
  };
}
