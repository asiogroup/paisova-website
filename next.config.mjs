/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lint is run separately in development; don't fail production builds on
  // stylistic ESLint rules (e.g. react/no-unescaped-entities in prose pages).
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
