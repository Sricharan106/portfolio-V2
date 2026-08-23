import { GITHUB_USERNAME } from "../app/data";
import type { Activity } from "../components/kibo-ui/contribution-graph";

type GitHubContributionsResponse = {
  contributions?: Activity[];
};

const CACHE_KEY = "github-contributions";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

type CachedData = {
  timestamp: number;
  data: Activity[];
};

export async function getGitHubContributions(): Promise<Activity[]> {
  try {
    // Check browser cache
    const cached = localStorage.getItem(CACHE_KEY);

    if (cached) {
      const parsed = JSON.parse(cached) as CachedData;

      if (Date.now() - parsed.timestamp < CACHE_DURATION) {
        return parsed.data;
      }

      localStorage.removeItem(CACHE_KEY);
    }

    // Fetch fresh data
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
    );

    if (!res.ok) {
      return [];
    }

    const data = (await res.json()) as GitHubContributionsResponse;
    const contributions = data.contributions ?? [];

    // Save to cache
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        timestamp: Date.now(),
        data: contributions,
      }),
    );

    return contributions;
  } catch (error) {
    console.error("Failed to fetch GitHub contributions:", error);
    return [];
  }
}
