const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./common-paths');

const config = {
  entry: {
    vendor: ['@material-ui/core', '@material-ui/icons', 'babel-polyfill', 'react', 'react-dom', 'redux'],
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              'babel-plugin-redux-saga',
            ]
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: 'vendor',
          name: 'vendor',
          enforce: true,
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    new webpack.ProvidePlugin({
      WaveSurfer: 'wavesurfer.js',
    }),
  ],
  resolve: {
    alias: {
      wavesurfer: require.resolve('wavesurfer.js'),
    },
  },

};

module.exports = config;
