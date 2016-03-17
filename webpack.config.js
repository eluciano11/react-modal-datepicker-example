const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',

  output: {
    path: 'build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: [
          path.resolve(__dirname, 'app', 'styles')
        ]
      },
      {
        test: /\.js/,
        loaders: ['babel'],
        include: [path.resolve(__dirname, 'app')]
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    inline: true,
    hot: true,
    progress: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only'
  },

  plugins: [
     new HtmlwebpackPlugin({
       title: 'Modal Datepicker'
     }),
     new webpack.HotModuleReplacementPlugin()
   ]
};
