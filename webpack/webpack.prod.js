const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglify-js-webpack-plugin'); //压缩js文件
const common = require('./webpack.common.js');
module.exports = merge(common, {
	plugins: [
		new UglifyJSPlugin({ sourceMap: true }),
		new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') })
	]
});
