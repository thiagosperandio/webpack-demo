const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src', 'index.js'),
    print: path.resolve(__dirname, 'src', 'print.js'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    filename: '[name]-[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    //publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};