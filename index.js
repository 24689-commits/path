//PATH

const path = require('path')
console.log(path.join(__dirname, 'index.js'));

const path = require('path')
console.log(__filename);

const path = require('path')
console.log(__dirname);

//FILE SYSTEM

const http = require('http')
const port = ++process.env.port || 4000
http.createServer((req, res)=>{
    res.end('Well done')
}).listen(port, () => {
    console.log(`This is running on port ${port} `);
})

const http = require('http');
http.createServer(function (req, res) {
  return res.end('Hello, this is Aphelele Joyi');
}).listen(8000);
