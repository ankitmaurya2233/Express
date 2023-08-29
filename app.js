const adminroute=require('./routes/admin');
const shoproute=require('./routes/shop');
const http = require('http');
const express=require('express');
const bodyparser=require('body-parser');

const app=express();

app.use(bodyparser.urlencoded({extended:false}));

app.use('/admin',adminroute);

app.use(shoproute);

app.use((req,res,next)=>{
    res.status(404).send('<h1>404</h1><br><h1>Page not found</h1>');
});


app.listen(3000);
