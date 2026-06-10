import type { NextConfig } from 'next';
import path from 'node:path';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  // Pin the workspace root to this project so a stray parent-level lockfile
  // (e.g. ~/package-lock.json) cannot be inferred as the root.
  turbopack: {
    root: path.resolve(__dirname),
  },
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Production-Build: console.* entfernen (console.error bleibt), schlankeres Bundle.
  compiler: {
    removeConsole: { exclude: ['error'] },
  },
};

export default nextConfig;
