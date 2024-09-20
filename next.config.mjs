/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "/",
    unoptimized: true,
  },
};

export default nextConfig;
