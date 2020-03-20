module.exports = function() {
	let env;
	let _DEV_ = true;
	let _PROD = false;
	switch (process.env.NODE_ENV) {
		case 'dev':
			env = dev;
			_DEV_ = true;
			_PROD = false;
			break;
		case 'production':
			env = 'prod';
			_DEV_ = false;
			_PROD = true;
			break;
		default:
			env = 'dev';
			_DEV_ = true;
			_PROD_ = false;
	}
	return require(`./webpack/${env}.conf.js`)({
		ROOTPATH: __dirname,
		_DEV_,
		_PROD_
	});
};
