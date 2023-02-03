
const express=require('express');

const contactController=require('../controller/contact');

const router=express.Router();
router.get('/contactus',contactController.getcontact);

router.post('/contactus',contactController.postcontact);
module.exports=router;