const path=require('path');
const adminroute=require('./routes/admin');
const shoproute=require('./routes/shop');
const contectus=require('./routes/contectus');
const sucess=require('./routes/sucess');
const http = require('http');
const express=require('express');
const bodyparser=require('body-parser');
const errorcontroller=require("./controller/404")


const app=express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminroute);

app.use(shoproute);
app.use(contectus);
app.use(sucess);


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});


app.listen(3000);
