

// server

var server = require('net');

server.createServer(function (socket) {
    console.log("connected");
    console.log('socket connected: '+new Date(), socket.address());
    socket.on('data', function (data) {
        console.log('got data: ',data.toString());
    });
    socket.end();
}).listen(8080);
 
