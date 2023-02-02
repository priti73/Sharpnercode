
const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');



const chatapp=express();

const route=require('./route/routes');
const messageroute=require('./route/message');
const contactusroute=require('./route/contactus');
const successroute=require('./route/succes');

chatapp.use(bodyParser.urlencoded({extended: false}));
chatapp.use(express.static(path.join(__dirname, 'public')));

chatapp.use(route);
chatapp.use(messageroute);
chatapp.use(contactusroute);
chatapp.use(successroute);

chatapp.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

chatapp.listen(3000);