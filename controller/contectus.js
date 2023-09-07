const path=require('path');
const rootDir=require('../util/path');

exports.getcontectus=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contectus.html'));
}


exports.postcontectus=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/sucess');
}