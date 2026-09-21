import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryBasePath = isGitHubPages ? "/e-forms" : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export" as const } : {}),
  basePath: repositoryBasePath,
  assetPrefix: repositoryBasePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
