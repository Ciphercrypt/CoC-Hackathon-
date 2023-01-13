const express = require('express');
const router = express.Router();
const {addUser,userLogin,getUser,searchFunction,addJobpost,getJobpost,addPhotopost,getPhotopost}=require('../controllers/userController');

router.post('/login', userLogin);
router.post('/addUser', addUser );
router.get('/getUser',getUser);
router.get('/searchQUery',searchFunction);
router.post('/addJobposting',addJobpost);
router.get('/getJobposting',getJobpost);
router.get('/getPhotopost',getPhotopost);
router.post('/addPhotopost',addPhotopost);





module.exports = router