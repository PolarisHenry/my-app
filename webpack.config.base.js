const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: {
    app: '/src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
}
