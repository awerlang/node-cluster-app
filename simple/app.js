/* eslint-env node */

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world ' + process.pid);
}).listen(8000);

console.log('Worker online', process.pid);
