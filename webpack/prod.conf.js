const webpackMerge = require('webpack-merge');

let options = {};
module.require = function(args) {
	options.ROOTPATH = args.ROOTPATH;
	options.env = args.env;
	return webpackMerge(require('./base.conf')(options), {
		plugins: [
			new webpackMerge.DefinePlugin({
				'process.env': 'production'
			}),
			new ExtractTextPlugin({
				filename: 'css/[name].css'
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warning: false
				}
			})
		]
	});
};
