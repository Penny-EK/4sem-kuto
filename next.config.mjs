/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "kuto.dk",
      },
      {
        protocol: "https",
        hostname: "zzlrhipbqzsscdsbozyq.supabase.co",
      },
    ],
  },
};

export default nextConfig;
