const express = require('express');
const app = express();
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = new CloudinaryStorage({
	cloudinary : cloudinary,
	params     : {
		folder : 'test'
	}
});

// cloudinary configuration
cloudinary.config({
	cloud_name : '',
	api_key    : '',
	api_secret : ''
});

const upload = multer({ storage: storage });

app.post('/up', upload.single('image'), async (req, res) => {
	return res.json({ picture: req.file.path });
});

app.listen(5000, () => console.log('Server running !!'));