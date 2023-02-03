const path=require('path');
const express=require('express');
const rootDir=require('../util/path');
const product=[];
exports.getAddproduct=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','admin.html'));
}
exports.postAddProduct=(req,res,next)=>{
    console.log(req.body.title);
    console.log(req.body.sizeofproduct);
    product.push({title: req.body.title});

    res.redirect('/shop');
}
exports.getProduct=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
}