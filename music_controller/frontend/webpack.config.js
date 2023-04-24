

const webpack = require("webpack");
const path = require("path");

module.exports = {
//   mode: "development",
  entry: './src/index.js',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./static/frontend"),
  }, 
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
   ],
  },
  optimization: {
    minimize : true,
  },
  plugins: [ 
    new webpack.DefinePlugin({
      "progress.env":{
        NODE_ENV: JSON.stringify("production"),
      },
    }),
],

}
