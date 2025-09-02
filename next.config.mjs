/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for SSG
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // Enable experimental features for better SEO
  experimental: {
    optimizeCss: true,
  },
  // Generate sitemap and robots.txt
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
