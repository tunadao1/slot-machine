const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["env", "react"],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|pdf)$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(mp3)/,
        exclude: /(node_modules)/,
        loader: "url-loader",
        options: {
          name: "/audio/[name].[ext]"
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader","sass-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};