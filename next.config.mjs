/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "./.next", // Changes the build output directory to `./dist/`.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
