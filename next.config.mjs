/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Remote Image Optimization */
  images: {
    remotePatterns: [new URL('https://i.ibb.co.com/**')],
  },
};

export default nextConfig;
