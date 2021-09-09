var express = require('express');

var app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(8000)

io.listen(server);

io.on("connection", socket => {
  socket.on("touch heart", msg => {
    console.log(msg);
  });
});

server.listen(8000, () => console.log("server running on port:" + 8000));

module.exports = app;
