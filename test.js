import cloudinary from 'cloudinary';
const cloudinaryConfig = {
	cloud_name: 'dqydioa16',
	api_key: 421711163816247,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true,
};

cloudinary.v2.config(cloudinaryConfig);

async function handler(req, res) {
	try {
		let { file } = req.body;
		const re = await cloudinary.v2.uploader.upload(file);
		return res.json({ message: 'upload successful' });
	} catch (error) {
		console.log({ err: error.message });
		res.json({ message: 'oopsie an error occured' });
	}
}

export default handler;
