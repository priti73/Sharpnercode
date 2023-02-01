const express=require('express');
const fs=require('fs');

const body=[];
const router=express.Router();
router.get('/',(req,res,next)=>{
    fs.readFile('username.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          data='No chat exist'
        }
        res.send(
            `${data}<form action="/" onsubmit="document.getElementById('username').value=
         localStorage.getItem('username')"
         method="POST">
         <input id="message" type="text" name="message" placeholder="message">
         <input type="hidden" name="username" id="username">
        <button type="submit">Send message</button></form>`);
      
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
