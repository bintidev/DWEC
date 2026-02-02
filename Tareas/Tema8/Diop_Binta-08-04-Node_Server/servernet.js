var net = require('net');
net.createServer(function (stream) {
    stream.write('hello\r\n');
    stream.on('bbaaii', function () {
        stream.write('baila bailareee\r\n');
    });
    stream.on('eenndd', function () {
        stream.end('goodbye\r\n');
    });

    stream.pipe(stream);
}).listen(7000);