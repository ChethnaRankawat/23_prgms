/*Question 9: Write a Node.js script using the http module to create a simple
HTTP server that listens on port 3000. The server should respond with "Hello,
World!" when accessed via a browser or an HTTP client.*/

const http = require('http')
http.createServer((req,res)=>{
    res.write("Hello World!")
    res.end();
})
