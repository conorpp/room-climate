

// WiFly server

var server = require('net');
var settings = require('./settings');

server.createServer(function (socket) {
    
    console.log("connected");
    console.log('socket connected: '+new Date(), socket.address());
    socket.on('data', function (data) {
        console.log('got data: ',data.toString());
    });
    socket.end();
    
}).listen(settings.tcp_port);

// Web Server
var port = settings.web_port;
var express = require("express");

var app = express();
app.set("view options", {layout: false});
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder

app.get("/", function(request, response){ //root dir
    response.render("index.html");
});

app.listen(port);

console.log('Listening on '+port);
 
