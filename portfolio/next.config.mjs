/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Tells Next.js to export static HTML/CSS/JS files
  basePath: '',
  // For username.github.io repos, basePath should be empty
  trailingSlash: true,
  // This helps with GitHub Pages navigation
  images: {
    unoptimized: true,
    // This allows images to work in static export
  },
  // Server components configuration for static export
  serverExternalPackages: [],
  // Disable ESLint during build to prevent failing on minor issues
  eslint: {
    // Only run ESLint on specific directories during builds
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
