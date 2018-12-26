const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = require('./webpack.common');

module.exports = merge(webpackConfig, {
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: /(node_modules|bower_components)/,
  },  
  output: {
    path: path.resolve(__dirname, '..', 'build-dev', 'js'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './src/index.html',
    }),
  ],  
});