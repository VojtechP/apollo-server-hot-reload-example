const path = require("path");

const cleanWebpackPlugin = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

const common = require("./webpack.common");

module.exports = merge.smart(common, {
  devtool: "source-map",
  entry: [path.join(__dirname, "src/index.js")],
  externals: [nodeExternals({})],
  mode: "production",
  plugins: [new cleanWebpackPlugin.CleanWebpackPlugin()]
});
