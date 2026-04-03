/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/page/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/main',
        destination: '/',
        permanent: true,
      },
      {
        source: '/shop_contents/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bbs/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/myreg/:path*',
        destination: '/',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      }
    ]
  }
};

export default nextConfig;
