var express = require('express');

// App setup
var app = express();
var socket = require('socket.io')

var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

let io = socket(server)
io.on('connection', function(socket){
  console.log(`${socket.id} is connected`);
});