// PACKAGE
require("@babel/polyfill")

const webpack = require('webpack')
const envConfig = require('./config/env')
const miniCSS = require('mini-css-extract-plugin')
const optimizeCSS = require('optimize-css-assets-webpack-plugin')
const optimizeJS = require('terser-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./public",
    port: 8080
  },
  optimization: {
    minimizer: [
      new optimizeCSS({}),
      new optimizeJS({})
    ]
  },
  plugins: [
    new miniCSS({ filename: 'style.css' }),
    new webpack.DefinePlugin(envConfig.keys)
  ],
  module: {
    rules: [
      { test: /.js[x]?$/, use: ['babel-loader'] },
      { test: /\.s?[ac]ss$/, use: [miniCSS.loader, 'css-loader', 'sass-loader'] },
      { test: /\.(woff|woff2|eot|ttf|svg)$/, use: ['file-loader'] }
    ]
  }
}