const express = require('express');
const router = express.Router();
const {addEvent,getEvent}=require('../controllers/eventController');


router.post('/addEvent', addEvent);
router.get('/getEvent', getEvent);


module.exports = router