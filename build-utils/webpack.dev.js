const webpack = require('webpack');
const commonPaths = require('./common-paths');

const port = process.env.PORT || 3000;

const config = {
  mode: 'development',
  entry: {
    app: ['babel-polyfill', `${commonPaths.appEntry}/index.js`],
  },
  output: {
    filename: '[name].[hash].js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  devServer: {
    host: 'localhost',
    port,
    historyApiFallback: true,
    hot: true,
    open: true,
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
};

module.exports = config;
