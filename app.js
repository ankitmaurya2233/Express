const http = require('http');
const express=require('express');
const bodyparser=require('body-parser');

const app=express();

app.use(bodyparser.urlencoded({extended:false}));


app.use('/add-product',(req,res,next)=>{
    console.log("this is second middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="Name"><input type="text" name="size" placeholder="size"><button type="submit">Add product</button></form>');
});

app.use('/product',(req,res,next)=>{
        console.log(req.body);
        res.redirect('/');
});


app.use('/',(req,res,next)=>{
    console.log("this is second middleware");
    res.send('<h1> hello to node js </h1>');
});


app.listen(3000);
