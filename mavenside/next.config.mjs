/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for Hostinger deployment
  trailingSlash: true, // Ensure trailing slashes for static export
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.1.8', 'localhost', '127.0.0.1'],
};

export default nextConfig;
