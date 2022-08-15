// npm i dotenv: package đọc biến môi trường
const http = require('http') // module http
require('dotenv').config()
const fs = require('fs')

const hostname = "127.0.0.1"
const port = 3000
const server = http.createServer((req, res) => {
    console.log(process.env); // environment variable
    res.statusCode = 200
    res.setHeader('Context-Type','text/plain')
    res.end(process.env.NODE_ENV)

})

server.listen(port, hostname, () => console.log("Server is running !!!"));