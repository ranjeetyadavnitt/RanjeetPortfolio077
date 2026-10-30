export interface CodingProfile {
  platform: string;
  name: string;
  handle: string;
  url: string;
  description: string;
  color: string;
}

export const CODING_PROFILES: CodingProfile[] = [
  {
    platform: "github",
    name: "GitHub",
    handle: "ranjeetyadavnitt",
    url: "https://github.com/ranjeetyadavnitt",
    description: "Open-source projects, AI pipelines, system architectures, and full-stack experiments.",
    color: "#38bdf8",
  },
  {
    platform: "leetcode",
    name: "LeetCode",
    handle: "ranjeet077",
    url: "https://leetcode.com/u/ranjeet077/",
    description: "Algorithmic challenges, Data Structures, Dynamic Programming, and Graph Traversals.",
    color: "#f59e0b",
  },
  {
    platform: "codeforces",
    name: "Codeforces",
    handle: "ranjeet077",
    url: "https://codeforces.com/profile/ranjeet077",
    description: "Contest problem solving and mathematical computational challenges.",
    color: "#3b82f6",
  },
];

