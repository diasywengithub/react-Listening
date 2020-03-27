const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: [ '@babel/polyfill', './src/index.js' ],
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Love Child',
			template: 'src/index.html' //绝对路径
			// filename: path.resolve(__dirname, 'dist/index.html')
			// template: __dirname + '../src/index.html' //默认会在dist路径下生成index.html并引用所有的静态资源
		})
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist/js')
	},
	resolve: {
		extensions: [ '*', '.js', '.jsx' ] //在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。
		// alias: { '@': resolve('src') }
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [ { loader: 'babel-loader' } ]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ],
						plugins: [ '@babel/transform-runtime' ]
					}
				}
			},
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
						/* 	options: {
							includePaths: [ 'absolute/path/a', 'absolute/path/b' ]
						} */
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: { limit: 8192, name: 'img/[name].[hash:8].[ext]' }
				}
			},
			{ test: /\.(woff|woff2|eot|ttf|otf)$/, use: [ 'file-loader' ] }
		]
	}
};
