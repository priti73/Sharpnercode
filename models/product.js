const fs=require('fs');
const path=require('path');
const p=path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'    
);

const getproductsFromFile=cb =>{
  fs.readFile(p,(err,fileContent)=>{
    if(err){
      cb([]);
    }
    else{
      cb(JSON.parse(fileContent));
    }
});
}

module.exports=class Product{
    constructor(t){
        this.title=t;
    }

     save(){
        getproductsFromFile(products=>{
          products.push(this);
          fs.writeFile(p,JSON.stringify(products), (err)=>{
            console.log(err);
          });
        });   
     }


      static fetchAll(cb){
        getproductsFromFile(cb);
    }
};