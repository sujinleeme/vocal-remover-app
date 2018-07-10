const commonPaths = require("./common-paths")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const config = {
	entry: {
		vendor: ["@material-ui/core", "@material-ui/icons", "babel-polyfill", "react", "react-dom", "redux"]
	},
	output: {
		path: commonPaths.outputPath,
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						plugins: [
							"babel-plugin-redux-saga"
						]
					}
				}
			}
		]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: "initial",
					test: "vendor",
					name: "vendor",
					enforce: true
				}
			}
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `public/index.html`,
			favicon: `public/favicon.ico`
		})
	]
}

module.exports = config
