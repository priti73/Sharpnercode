const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');


const app=express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactusroute=require('./routes/contactus');
const successroute=require('./routes/succes');

const errorController=require('./controller/error');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use(contactusroute);
app.use(successroute);

app.use(errorController.get404);

app.listen(4000);
