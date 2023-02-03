const path=require('path');
const express=require('express');
const rootDir=require('../util/path');

exports.getcontact=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
}

exports.postcontact=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/succes');
}
exports.getsuccess=(req,res,next)=>{
    res.send('<h1>Form successfuly filled!</h1>');
}