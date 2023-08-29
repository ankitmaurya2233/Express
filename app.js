<<<<<<< HEAD
const adminroute=require('./routes/admin');
const shoproute=require('./routes/shop');
=======
>>>>>>> 8a3c82fa8e2525ab9745b46600a650c68c0fab9f
const http = require('http');
const express=require('express');
const bodyparser=require('body-parser');

const app=express();

app.use(bodyparser.urlencoded({extended:false}));

<<<<<<< HEAD
app.use('/admin',adminroute);

app.use(shoproute);

app.use((req,res,next)=>{
    res.status(404).send('<h1>404</h1><br><h1>Page not found</h1>');
=======

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
>>>>>>> 8a3c82fa8e2525ab9745b46600a650c68c0fab9f
});


app.listen(3000);
