const express=require('express');


const router=express.Router();


router.get('/add-product',(req,res,next)=>{
    console.log("this is second middleware");
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="Name"><input type="text" name="size" placeholder="size"><button type="submit">Add product</button></form>');
});

router.post('/add-product',(req,res,next)=>{
        console.log(req.body);
        res.redirect('/');
});

module.exports=router;