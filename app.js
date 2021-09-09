var express = require('express');

var app = express();
var http = require( "http" ).createServer( app );
var io = require( "socket.io" )( http );
http.listen(8080, "https://distance-love.herokuapp.com");


io.on('connection',function(socket){  
    console.log("A user is connected");
});