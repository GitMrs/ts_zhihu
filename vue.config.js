module.exports = {
  devServer: {
    proxy: {
      '^/zhihu': {
        target: 'http://api.vikingship.xyz/',
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          "^/zhihu": '/'
        }
      }
    }
  }
}