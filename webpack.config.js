var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
      path: __dirname + "/build",
      filename: "[name].js"
  },
  module: {
      loaders: [
          {
            test: /\.css$/,
            loader: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.js|jsx$/,
            loader: ['babel-loader']
          },
          {
            test: /\.html$/,
            use: [ "html-loader" ]
          },
          {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader?limit=10000',
          },
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'NgApp',
      template: './src/template.js'
    }),
    new DashboardPlugin()
  ]
};
