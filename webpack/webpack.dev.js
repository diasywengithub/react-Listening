const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const url = {
	req: 'http://192.168.11.222:8888'
};

module.exports = merge(common, {
	devtool: '#inline-source-map',
	plugins: [ new webpack.HotModuleReplacementPlugin() ],
	devServer: {
		// contentBase:'./dist',  //contentBase可以不用指定 因为用了这个HtmlWebpackPlugin插件
		// historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，任意的 404 响应都可能需要被替代为 index.html
		inline: true, //实时刷新
		port: 7777,
		host: '192.168.11.228'
		/* 	proxy: {
			'/api': {
				target: url.req,
				changeOrigin: true,
				pathRewrite: { '^/api': '' },
				secure: false
			}
		} */
	}
});
