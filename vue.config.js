const webpack = require('webpack');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_OPTIONS_API__': JSON.stringify(true), // o false, según sea necesario
        '__VUE_PROD_DEVTOOLS__': JSON.stringify(false), // o true, según sea necesario
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false) // Defínelo según tus necesidades
      })
    ]
  }
});