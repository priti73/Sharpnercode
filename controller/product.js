const path=require('path');
const express=require('express');
const rootDir=require('../util/path');
const Product=require('../models/product');

exports.getAddproduct=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','admin.html'));
}
exports.postAddProduct=(req,res,next)=>{
    console.log(req.body.title);
    console.log(req.body.sizeofproduct);
    const product=new Product(req.body.title);
    product.save();
    res.redirect('/shop');
}
exports.getProduct=(req,res,next)=>{
    Product.fetchAll((products)=>{
        res.sendFile(path.join(rootDir,'views','shop.html')); 
    });
    //res.sendFile(path.join(rootDir,'views','shop.html'));
}