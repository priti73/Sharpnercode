const fs=require('fs');
const requesthandler=(req,res)=>{
 const url=req.url;
 const method=req.method;
if(url==='/'){
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit"> Send</button></form></body>');
        res.write(`<body>${data}</body>`);
        res.write('<html>');
        return res.end();
      }); 

}
else if(url==='/message' && method==='POST'){
    
    const body=[];
    req.on('data', (chunk) =>{
    console.log(chunk);
    body.push(chunk);
    })
    
   return req.on('end',()=>{
    const parseBody=Buffer.concat(body).toString();
    const message=parseBody.split('=')[0];
    fs.writeFile('message.txt', message,err =>{
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    });
    })
}
else{
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>My first page</title><head>');
res.write('<body><h1>Hello from node js server</h1></body>')
res.write('</html>');
res.end();
}
   
}
/*module.exports={
   handler: requesthandler,
   sometext:'some hard coded text'
};*/
/*module.exports.handler = requesthandler;
module.exports.sometext='some hard coded text';*/
exports.handler = requesthandler;
exports.sometext='some hard coded text';
