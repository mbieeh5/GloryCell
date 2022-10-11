/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
require('dotenv').config()                                                        

const path = require('path')                                                      
const Dotenv = require('dotenv-webpack')                                          

module.exports = {                                                                
  webpack: (config) => {                                                          
    config.plugins = config.plugins || []                                         

    config.plugins = [                                                            
     ...config.plugins,                                                          

     // Read the .env file                                                       
     new Dotenv({                                                                
          path: path.join(__dirname, '.env'),                                       
          systemvars: true                                                          
        })                                                               
    ]                                                                             

    return config                                                                 
  }                                                                               
}      

module.exports = nextConfig
