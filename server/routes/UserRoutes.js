const express = require('express');
const router = express.Router();
const {addUser,userLogin,getUser,searchFunction}=require('../controllers/userController');

router.post('/login', userLogin);
router.post('/addUser', addUser );
router.get('/getUser',getUser);
router.get('/searchQUery',searchFunction);


module.exports = router