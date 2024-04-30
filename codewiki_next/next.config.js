/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    externalDir: true, // or false, depending on your requirement
  },
  
  images: {
    domains: ['localhost'],
  },
  
  // fonts: {
  //   google: {
  //     families: ['Righteous', 'Poppins:400,500,600', 'Montserrat:300,400,500,600,700'],
  //   },
  // },
};

module.exports = nextConfig;
