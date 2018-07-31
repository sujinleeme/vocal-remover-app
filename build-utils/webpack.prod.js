
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonPaths = require('./common-paths');

const config = {
  mode: 'production',
  entry: {
    app: ['babel-polyfill', `${commonPaths.appEntry}/index.js`],
  },
  output: {
    filename: 'static/[name].[hash].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                camelCase: true,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    autoprefixer: {
                      browsers: 'last 2 versions',
                    },
                  },
                },
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/styles.[hash].css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};

module.exports = config;
