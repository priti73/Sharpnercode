const express=require('express');
const router=express.Router();
router.get('/add-product',(req,res,next)=>{
    console.log('In another middleware');
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" name="sizeofproduct"><button type="submit"> Add Product</button></form><ul id="users"></ul>');
});
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
});
module.exports=router;