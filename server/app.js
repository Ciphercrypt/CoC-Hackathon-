const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
dotenv.config();

const userRoutes = require('./routes/UserRoutes');
const tapRoutes = require('./routes/TapRoutes');
const adminRoutes = require('./routes/adminRoutes');

var jsonParser = bodyParser.json();
var urlEncoded = bodyParser.urlencoded({ extended: true });

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	cors({
		origin : '*'
	})
);

let _response = {};

app.use('/api/user', userRoutes);
app.use('/api/tap', tapRoutes);
app.use('/api/admin', adminRoutes);

cloudinary.config({
	cloud_name : process.env.CLOUDINARY_NAME,
	api_key    : process.env.CLOUDINARY_API_KEY,
	api_secret : process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
	cloudinary : cloudinary,
	params     : {
		folder : 'test'
	}
});

const upload = multer({ storage: storage });

app.post('/api/admin/addImage', upload.single('image'), async (req, res) => {
	return res.json({ picture: req.file.path });
});

app.use((req, res, next) => {
	const error = new Error('INVALID ROUTE');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error : {
			message : error.message
		}
	});
});

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.MONGO_URL.replace('<password>', process.env.MONGO_PASSWORD), {
		useNewUrlParser    : true,
		useUnifiedTopology : true
	})
	.then(() => {
		_response.database = 'Healthy';
		console.log('Database Connected');
		console.log('server Started on PORT', PORT);
	})
	.catch((err) => {
		_response.database = 'Unhealthy';
		console.log('Error in connecting to DataBase', err.message);
	});

app.use('/', (req, res) => {
	res.status(200).json(_response);
});

app.listen(PORT, () => {
	_response.app = 'Healthy';
});
