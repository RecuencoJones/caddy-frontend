const dotenv = require('dotenv')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

dotenv.config();

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }, {
        test: /\.vue$/,
        use: 'vue-loader'
      }, {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    proxy: {
      '/api': {
        changeOrigin: true,
        target: process.env.PROXY_API_HOST,
        pathRewrite: { '^/api': '' }
      },
      '/bff': {
        changeOrigin: true,
        target: process.env.PROXY_BFF_HOST,
        pathRewrite: { '^/bff': '' }
      }
    }
  },
  devtool: 'source-map'
}
