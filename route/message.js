const path=require('path');
const express=require('express');
const rootDir=require('../util/path');
const fs=require('fs');

const body=[];
const router=express.Router();
router.get('/',(req,res,next)=>{
    fs.readFile('username.txt', 'utf8', (err, data) => {
        if (err) {
         console.error(err);
          data='No chat exist'
        }
       //res.send(`${data}
       //{sendFile(path.join(rootDir,'views','message.html'))}`);
       res.sendFile(path.join(rootDir,'views','message.html'));
     
   })
}); 

router.post('/',(req,res,next)=>{
    const{username,message}=req.body;
    console.log(message);
    console.log(username);
    fs.writeFile("username.txt",`${username}:${message}`,{flag:'a'},(err) =>
    err ? console.log(err): res.redirect('/')
    );
    
});
module.exports=router;
