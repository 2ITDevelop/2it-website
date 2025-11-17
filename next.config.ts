import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '2it-foodsite-git-feature-nuova-grafica-mettius-projects.vercel.app',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
