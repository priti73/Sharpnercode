const express=require('express');
const router=express.Router();
router.get('/succes',(req,res,next)=>{
    res.send('<h1>Form successfuly filled!</h1>');
});
module.exports=router;