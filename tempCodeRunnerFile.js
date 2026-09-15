// import http from htttp;
const http=require("http");  //way to get server
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":'text/plaintext',
        "server":'node.js'
    })
    res.end("hello world");
});
port = 3005;
server.listen(3005,()=>{
    console.log(`server is running on http://localhost:${port}`);
})