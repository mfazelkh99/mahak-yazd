import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true, // چشم‌پوشی از خطاهای تایپ‌اسکریپت در زمان خروجی
  },
};

export default nextConfig;