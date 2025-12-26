/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
       
      },
    ],
  },
  eslint:{
    ignoreDuringBuilds:true,
  }

};

export default nextConfig;
