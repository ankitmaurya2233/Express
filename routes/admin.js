const express=require('express');
const getproduct=require('../controller/product');
const postproduct=require('../controller/product');

const router=express.Router();


router.get('/add-product',getproduct.getproduct);

router.post('/add-product',postproduct.postproduct);

module.exports=router;