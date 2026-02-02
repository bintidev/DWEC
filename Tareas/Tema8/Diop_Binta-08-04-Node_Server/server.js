const http = require('http');
const hostname = '127.0.0.1';
const port = 1337;
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1><br><img src="https://i.pinimg.com/originals/88/14/9b/88149b0400750578f4d07d9bc3fb0fee.gif" width="200px">');
}).listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`);
});