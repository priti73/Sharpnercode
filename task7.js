
var http = require('http');
/*const server= http.createServer((req,res) =>{
    
    console.log(req.url);
    console.log(req.method, req.headers);
    res.setHeader('Content-type', 'tex/html');
    res.write('<html>');
    res.write('<head><title>Welcome home</title><header>');
    res.write('<body><h1> Welcome to my Node Js project</h1><body>');
    res.write('/<html>');
    res.end();

});
server.listen(4000);*/

http.createServer((req,res) =>{
    const pathName=req.url;
    if(pathName== '/'|| pathName=="/node"){
        res.end("<h1>Welcome to my node js project</h1>");
    }
    else if(pathName == "/home"){
        res.end("<h1>Welcome home.</h1>");
    } else if (pathName == "/about") {
      res.end("<h1>Welcome to About Us page</h1>");
    } else {
      res.end("<h2>Page Not Found</h2>");
    }
}).listen(4000);