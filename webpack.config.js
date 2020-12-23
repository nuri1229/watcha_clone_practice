const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  return {
    mode: "development",
    entry: ["./src/index.tsx"],
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        // todo(선택) : import시 경로를 줄여 사용할 키워드를 입력합니다. 예) global: path.resolve(__dirname, 'src/global/')
      },
    },
    output: {
      path: path.join(__dirname, "/build"),
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },

        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            limit: 10000,
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      new MiniCssExtractPlugin({ filename: "[name].css" }),
    ],
    devServer: {
      historyApiFallback: true,
      disableHostCheck: true,
      port: 3030,
      host: "0.0.0.0",
    },
  };
};
