

// WiFly server

var server = require('net');

server.createServer(function (socket) {
    
    console.log("connected");
    console.log('socket connected: '+new Date(), socket.address());
    socket.on('data', function (data) {
        console.log('got data: ',data.toString());
    });
    socket.end();
    
}).listen(8080);

// Web Server
var port = 1337;
var express = require("express");

var app = express();
app.set("view options", {layout: false});
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder

app.get("/", function(request, response){ //root dir
    response.render("index.html");
});

app.listen(port);
 
