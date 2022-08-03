const unfinishedServiceCall = require('./unfinishedService');

const serviceController = async (req, res) => {
	const result = await unfinishedServiceCall(req);
	return result;
}

module.exports = serviceController;