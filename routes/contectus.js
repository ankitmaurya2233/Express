const express=require('express');

const router =express.Router();
const getcontectus=require('../controller/contectus');
const postcontectus=require('../controller/contectus')


router.get('/contactus',getcontectus.getcontectus);
router.post('/contactus',postcontectus.postcontectus);
module.exports=router;