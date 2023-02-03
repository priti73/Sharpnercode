
const path=require('path');
const express=require('express');
const rootDir=require('../util/path');
exports.get404=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
}