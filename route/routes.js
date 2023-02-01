const express=require('express');
const router=express.Router();
router.get('/login',(req,res,next)=>{
    
    res.send('<form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action="/login" method="POST"><input id="username" type="text" name="title"><button type="submit">Login</button></form>');
 
});

router.post('/login',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
module.exports=router;