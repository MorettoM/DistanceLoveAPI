const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    socket.on("heart touch", msg => {
        switch (msg) {
            case 'marcos touched':
                io.emit("marcos", msg);
                break;
            case 'marcos untouched':
                io.emit("untouched", msg);
                break;
            case 'nacho touched':
                io.emit("touched", msg);
                break;
            case 'nacho untouched':
                io.emit("untouched", msg);
                break;
           default:
                break;
        }
   });
});
// end of socket.io logic

module.exports = socketapi;