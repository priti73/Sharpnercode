
const express=require('express');
const bodyParser=require('body-parser');


const chatapp=express();

const route=require('./route/routes');
const messageroute=require('./route/send');

chatapp.use(bodyParser.urlencoded({extended: false}));

chatapp.use(route);
chatapp.use(messageroute);

chatapp.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not found</h1>');
});

chatapp.listen(3000);