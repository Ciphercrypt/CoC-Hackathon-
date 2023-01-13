// const multer = require('multer');
// const cloudinary = require('cloudinary').v2;
// const dotenv = require('dotenv');
// dotenv.config();

// const storage = new CloudinaryStorage({
// 	cloudinary : cloudinary,
// 	params     : {
// 		folder : 'test'
// 	}
// });

// // Cloudinary configuration
// cloudinary.config({
// 	cloud_name : process.env.CLOUDINARY_NAME,
// 	api_key    : process.env.CLOUDINARY_API_KEY,
// 	api_secret : process.env.CLOUDINARY_API_SECRET
// });

// // API to upload image to Cloudinary
// module.exports = {
// 	addImage : async (req, res, next) => {
// 		try {
// 			console.log('yetay ka');
// 			console.log(process.env.CLOUDINARY_API_SECRET);

// 			const upload = multer({ storage: storage });

// 			//console.log(req);
// 			// Upload image to Cloudinary
// 			const result = await cloudinary.uploader.upload(req.file.buffer.toString());

// 			// Add image URL to the request body
// 			req.body.photo_url = result.secure_url;
// 			upload.single('image');

// 			// Continue with the rest of the logic

// 			// Send success response
// 			console.log(result);
// 			return res.status(200).json({
// 				success  : true,
// 				message  : 'Image uploaded successfully',
// 				response : result
// 			});
// 		} catch (error) {
// 			console.log(error);
// 			return res.status(400).json({ success: false, message: error.message });
// 		}
// 	}
// };
