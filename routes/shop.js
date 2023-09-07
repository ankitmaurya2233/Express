
const express=require('express');
const router =express.Router();
const getshop=require('../controller/shop');


router.get('/',getshop.getshop);
module.exports=router;