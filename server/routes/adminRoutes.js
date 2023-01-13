const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const storage = multer.memoryStorage();

const { addEvent, getEvent } = require('../controllers/eventController');
const { addImage } = require('../controllers/cloudController');

const upload = multer({ storage });

router.post('/addEvent', addEvent);
router.get('/getEvent', getEvent);

// router.post("/addImage", upload.single("image"), addImage);

module.exports = router;
