import { useEffect, useState } from "react";
import { ArrowUpRight, Github, GitPullRequest, Star } from "lucide-react";

import {
  getopensource,
  type IOpenSourceData,
  type IRepositoryData,
} from "../../lib/github-prs";

function formatDate(date: string | null) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function formatStars(stars: number) {
  if (stars >= 1000) {
    return `${(stars / 1000).toFixed(1)}k`;
  }

  return stars.toString();
}

/* ─────────────────────────────────────────────
   Featured Repository
───────────────────────────────────────────── */

function FeaturedRepository({ repository }: { repository: IRepositoryData }) {
  const recentPRs = repository.prs.slice(0, 3);

  return (
    <article className="cursor-target group overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-white/[0.03]">
      {/* Repository image */}
      <a
        href={repository.html_url}
        target="_blank"
        rel="noreferrer"
        className="relative block aspect-[16/8] overflow-hidden bg-black/5 dark:bg-white/5"
      >
        <img
          src={repository.image}
          alt={`${repository.name} repository`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3 text-white">
          <div className="min-w-0">
            <p className="text-xs text-white/60 px-2">{repository.owner}</p>

            <h3 className="truncate text-xl font-semibold sm:text-2xl px-2">
              {repository.name}
            </h3>
          </div>

          <div className="shrink-0 rounded-full bg-white/10 p-2 backdrop-blur-md">
            <Github
              size={20}
              className="shrink-0 text-black/30 dark:text-white/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </a>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {repository.description && (
          <p className="line-clamp-2 text-sm leading-6 text-black/60 dark:text-white/60">
            {repository.description}
          </p>
        )}

        {/* Stats */}
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-black/50 dark:text-white/50">
          {repository.language && <span>{repository.language}</span>}

          <span className="flex items-center gap-1.5">
            <Star size={13} />
            {formatStars(repository.stars)}
          </span>

          <span className="flex items-center gap-1.5">
            <GitPullRequest size={13} />
            {repository.mergedPRCount} merged PR
            {repository.mergedPRCount !== 1 ? "s" : ""}
          </span>

          {repository.lastMergedAt && (
            <span>{formatDate(repository.lastMergedAt)}</span>
          )}
        </div>

        {/* Recent PRs */}
        <div className="mt-6">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-black/35 dark:text-white/35">
            Recent merges
          </p>

          <div className="space-y-1">
            {recentPRs.map((pr) => (
              <a
                key={pr.html_url}
                href={pr.html_url}
                target="_blank"
                rel="noreferrer"
                className="group/pr flex items-center gap-2 rounded-md py-1.5 text-sm transition-colors hover:text-black dark:hover:text-white"
              >
                <GitPullRequest
                  size={14}
                  className="shrink-0 text-black/35 dark:text-white/35"
                />

                <span className="min-w-0 flex-1 truncate">{pr.title}</span>

                <span className="shrink-0 text-xs text-black/30 dark:text-white/30">
                  #{pr.number}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   Small Repository Card
───────────────────────────────────────────── */

function SmallRepository({ repository }: { repository: IRepositoryData }) {
  return (
    <a
      href={repository.html_url}
      target="_blank"
      rel="noreferrer"
      className="cursor-target group flex min-h-[150px] flex-col rounded-xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg hover:shadow-black/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:shadow-black/20"
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-xs text-black/40 dark:text-white/40">
            {repository.owner}
          </p>

          <h3 className="mt-0.5 truncate font-semibold">{repository.name}</h3>
        </div>

        <Github
          size={20}
          className="shrink-0 text-black/30 dark:text-white/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>

      {/* Description */}
      {repository.description && (
        <p className="mt-3 line-clamp-2 text-xs leading-5 text-black/50 dark:text-white/50">
          {repository.description}
        </p>
      )}

      {/* Bottom stats */}
      <div className="mt-auto flex items-center gap-4 pt-4 text-xs text-black/40 dark:text-white/40">
        <span className="flex items-center gap-1">
          <GitPullRequest size={13} />
          {repository.mergedPRCount}
        </span>

        <span className="flex items-center gap-1">
          <Star size={13} />
          {formatStars(repository.stars)}
        </span>

        {repository.language && (
          <span className="ml-auto truncate">{repository.language}</span>
        )}
      </div>
    </a>
  );
}

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */

export default function OpenSource() {
  const [data, setData] = useState<IOpenSourceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadOpenSource() {
      try {
        const result = await getopensource();

        if (mounted) {
          setData(result);
        }
      } catch (error) {
        console.error("Failed to load GitHub contributions:", error);

        if (mounted) {
          setError("Unable to load GitHub contributions.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadOpenSource();

    return () => {
      mounted = false;
    };
  }, []);

  /* Loading */
  if (loading) {
    return (
      <section id="opensource" className="py-16 sm:py-20 lg:py-24">
        <div className="animate-pulse">
          <div className="h-9 w-40 rounded bg-black/10 dark:bg-white/10" />

          <div className="mt-8 grid grid-cols-3 gap-5">
            <div className="h-16 rounded bg-black/5 dark:bg-white/5" />
            <div className="h-16 rounded bg-black/5 dark:bg-white/5" />
            <div className="h-16 rounded bg-black/5 dark:bg-white/5" />
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="h-[420px] rounded-2xl bg-black/5 dark:bg-white/5" />
            <div className="h-[420px] rounded-2xl bg-black/5 dark:bg-white/5" />
          </div>
        </div>
      </section>
    );
  }

  /* Error */
  if (error || !data) {
    return (
      <section id="opensource" className="py-16 sm:py-20 lg:py-24">
        <p className="text-sm text-black/50 dark:text-white/50">
          {error ?? "No GitHub contribution data available."}
        </p>
      </section>
    );
  }

  const featured = data.repositories.slice(0, 2);
  const remaining = data.repositories.slice(2);

  return (
    <section
      id="opensource"
      className="py-1 border-t border-gray-800 pt-4 dark:border-gray-500"
    >
      {/* ───────────────── Heading ───────────────── */}
      <div className="mb-10 sm:mb-12">
        <div className="flex items-baseline gap-3">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Open Source.
          </h2>

          <Github size={20} className="text-black/30 dark:text-white/30" />
        </div>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-black/50 dark:text-white/50">
          Merged pull requests in repositories I do not own, all time.
        </p>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 sm:flex sm:gap-10">
          <div>
            <div className="text-2xl font-semibold sm:text-3xl">
              {data.externalMergedPRs}
            </div>

            <p className="mt-1 text-[11px] leading-4 text-black/45 dark:text-white/45 sm:text-xs">
              PRs in these repos
            </p>
          </div>

          <div>
            <div className="text-2xl font-semibold sm:text-3xl">
              {data.repositoryCount}
            </div>

            <p className="mt-1 text-[11px] leading-4 text-black/45 dark:text-white/45 sm:text-xs">
              repos shown
            </p>
          </div>

          <div>
            <div className="text-2xl font-semibold sm:text-3xl">
              {data.totalMergedPRs}
            </div>

            <p className="mt-1 text-[11px] leading-4 text-black/45 dark:text-white/45 sm:text-xs">
              total merged PRs
            </p>
          </div>
        </div>
      </div>

      {/* ───────────────── Featured Repositories ───────────────── */}
      {featured.length > 0 && (
        <div className="grid gap-5 lg:grid-cols-2">
          {featured.map((repository) => (
            <FeaturedRepository
              key={repository.full_name}
              repository={repository}
            />
          ))}
        </div>
      )}

      {/* ───────────────── Remaining Repositories ───────────────── */}
      {remaining.length > 0 && (
        <div className="mt-5">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-wider text-black/35 dark:text-white/35">
              More contributions
            </span>

            <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {remaining.map((repository) => (
              <SmallRepository
                key={repository.full_name}
                repository={repository}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
