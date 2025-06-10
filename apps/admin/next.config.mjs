/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui", "database"],
  experimental: {
    serverExternalPackages: ["@prisma/client"],
  },
};

export default nextConfig;
