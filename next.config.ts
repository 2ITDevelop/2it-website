import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['2it-foodsite.vercel.app'],
    // oppure:
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '2it-foodsite.vercel.app',
    //   },
    // ],
  },
};

export default nextConfig;
