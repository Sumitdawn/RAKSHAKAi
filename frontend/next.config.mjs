const nextConfig = {
  // typedRoutes moved out of experimental in newer Next versions
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

};

export default nextConfig;
