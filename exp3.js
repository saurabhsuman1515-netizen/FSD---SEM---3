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







// const http = require("http");

// const server = http.createServer((req, res) => {

//     // Set status code
//     res.statusCode = 200;

//     // Set response header
//     res.setHeader("Content-Type", "text/plain");

//     // Send response and finish the request
//     res.end("Hello World");
// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });