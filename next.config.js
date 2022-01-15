const path = require('path')

module.exports = {
  assetPrefix: './',
  exportPathMap: (a, b) => {
    console.log(a, b)

    return {
      '/': { page: '/' }
    }
  }
}
