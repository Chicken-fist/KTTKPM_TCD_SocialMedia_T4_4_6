//Express: 1 framework của JS,
//   ->lớp trung gian trả về Httprequest, layout..., điều hướng dê dàng 
const express = require('express');
const { hostname } = require('os');
const app = express();
const port = 3000;

 app.use((req, res, next) => {
    console.log("Request: " + req);
    console.log("Response: " + res );
    next()
 })

 app.get('/', function (req, res) {
    res.send('Hello World')
 })

 app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${3000}`);
 })