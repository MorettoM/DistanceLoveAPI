var express = require('express');

var app = express();

const server = app.listen(8000, () => console.log("server running on port:" + 8000));
const io = require("socket.io")();

io.listen(server);

io.on("connection", socket => {
  console.log('user connected')
  socket.on("touch heart", msg => {
    console.log(msg);
  });
});

module.exports = app;
