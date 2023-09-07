
const express=require('express');

const router =express.Router();
const getsucess=require('../controller/sucess');


router.get('/sucess',getsucess.getsucess);

module.exports=router;