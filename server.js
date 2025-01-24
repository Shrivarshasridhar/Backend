// build in modules fs,os,http
const http=require('http');
const server=http.createServer((req,res)=>
res.end("This is varsha")

)
const port=3000;
server.listen(port);