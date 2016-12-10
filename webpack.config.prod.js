const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: resolve(__dirname, 'src'),
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-thunk',
      'styled-components',
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        loaders: [
          'babel-loader',
        ],
        include: resolve(__dirname, 'src'),
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'main'],
    }),
    new HtmlWebpackPlugin({template: 'src/index.html'}),
  ],
};
