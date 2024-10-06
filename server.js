const http = require('http')
const fs = require('fs')
http.createServer(function(req,res){
    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data)
    })
}).listen(8888)