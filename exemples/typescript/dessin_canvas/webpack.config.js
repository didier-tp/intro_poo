const webpack = require("webpack");
const path = require("path");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");//for webpack4

//entry: "./src/index.js" ou entry: "./src/main.js" ou ...
let config = {
  mode: 'production',
  entry: "./dist/js/my-canvas.js",
  output: {
    path: path.resolve(__dirname, "./dist/build"),
    filename: "./fig-bundle.js"
  }
}

module.exports = config;