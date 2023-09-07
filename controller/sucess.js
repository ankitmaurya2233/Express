const path=require('path');
const rootDir=require('../util/path');


exports.getsucess=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','complete.html'));
}