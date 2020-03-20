const webpackMerge = require('webpack-merge');
const PUBLICPATH = '/assets/';
const PORT = '9000';
let options = {};
module.exports = function(args) {
	options.ROOTPATH = args.ROOTPATH;
	options.env = args.env;
	return webpackMerge(require('./base.conf')(options), {
		devtool: 'source-map',
		devServer: {
			contentBase: path.join(args.ROOTPATH, './src'),
			historyApiFallback: true,
			hot: true,
			port: PORT,
			proxy: {
				'*': `http://localhost:${PORT}/${PUBLICPATH}`
			}
		},
		plugins: []
	});
};
