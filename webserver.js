

// WiFly server

var server = require('net');
var settings = require('./settings');

server.createServer(function (socket) {
    
    console.log("connected");
    console.log('socket connected: '+new Date(), socket.address());
    socket.on('data', function (data) {
        console.log('got data: ',data,data.toString());
    });

    
}).listen(settings.tcp_port);

// Web Server
var port = settings.web_port;
var express = require("express");

var app = express();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/public');          // looks for .html in /public
  app.set('view engine', 'hbs');                    // it will automatically look for .html
  app.use(express.static(__dirname + '/public'));   // looks for .js and .css in /public
});
app.engine('html', require('hbs').__express);   // hbs will load dynamic values

app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder

app.get("/", function(request, response){ //root dir
    response.render("index", {title:'my dynamic page'});
});

app.get("/*", function(request, response){ //root dir
    
    // look at all the data in the request object!
    //console.log(request);
    
    // grab the /url and remove the '/' character.
    var page = request.url.replace('/','');
    console.log('requested '+page+' ');
    
    response.render("index", {title:'my dynamic page'});
});



app.listen(port);

console.log('Listening on '+port);
 
