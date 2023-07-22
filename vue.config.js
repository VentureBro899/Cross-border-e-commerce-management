const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    setupMiddlewares: require('./src/mock/index.js') // 引入 mock/index.js
  },
  configureWebpack: (config) => {
    //调试JS
    config.devtool = "source-map"
  },
  css: {
    //查看CSS属于哪个css文件
    sourceMap: true,
  }


})


