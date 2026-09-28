/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io"
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      }
    ]
  },
  
  reactCompiler: true,
};

export default nextConfig;