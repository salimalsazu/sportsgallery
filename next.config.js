/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  optimizeFonts:true,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:"i.ibb.co"
      },
    ],
    minimumCacheTTL:1500000,
  },

  env: {
    MONGO_URI: "mongodb+srv://sportsgallery:Wz52G4811fxD2Ly9@portfolio.zka99gz.mongodb.net/?retryWrites=true&w=majority"
  }

}



module.exports = nextConfig
