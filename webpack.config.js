var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  entry: {
    vendor: ["angular", "ui-router"],
    app: ["./src/index.js"]
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js"],
    alias: {
      angular: "angular/angular.min.js",
      "ui-router": "angular-ui-router/release/angular-ui-router.min.js"
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["es2015"]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: "url-loader?limit=10000"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "NgApp",
      template: "./src/template.js"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "app",
      minChunks: 2
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
