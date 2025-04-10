const path = require('path');

module.exports = (on, config) => {
	const options = {
			project: path.resolve(config.projectRoot, 'tsconfig.json')
	};

	require('ts-node').register(options);
	return config;
};
