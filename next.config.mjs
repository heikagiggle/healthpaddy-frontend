/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          { protocol: 'https', hostname: 'files.skillpaddy.com' },
        ],
      },
    output: "standalone"
};

export default nextConfig;
