const cloudinary = require('cloudinary').v2;
const config = {
	cloud_name: 'dqydioa16',
	api_key: 421711163816247,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true,
};
cloudinary.config(config);
module.exports = async function (context, req) {
	context.log('JavaScript HTTP trigger function processed a request.');

	const name = req.query.name || (req.body && req.body.name);
	const responseMessage = name
		? 'Hello, ' + name + '. This HTTP triggered function executed successfully.'
		: 'This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.';

	context.res = {
		// status: 200, /* Defaults to 200 */
		body: 'benj modified the logic',
	};
};
