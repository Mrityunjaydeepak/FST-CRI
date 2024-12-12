/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: "OutP", // Customize the output directory if needed
};

export default nextConfig;
