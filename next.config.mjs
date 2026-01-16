/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? "/EricaArquit" : "",
  assetPrefix: isProd ? "/EricaArquit/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/EricaArquit" : "",
  },
};

export default nextConfig;
