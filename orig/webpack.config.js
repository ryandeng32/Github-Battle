// to deal with file system
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  // production or development mode
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
    }),
  ],
};
© 2020 GitHub, Inc.