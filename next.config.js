const path = require('path')

module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  },
  assetPrefix: './',
  exportPathMap: (a, b) => {
    console.log(a, b)

    return {
      '/': { page: '/' }
    }
  }
}
