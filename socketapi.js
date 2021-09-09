const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log('User connected', socket.id)
    socket.on("heart touch", msg => {
        switch (msg) {
            case 'marcos touched':
                io.emit('marcos touched', msg);
                break;
            case 'marcos untouched':
                io.emit("marcos untouched", msg);
                break;
            case 'nacho touched':
                io.emit("nacho touched", msg);
                break;
            case 'nacho untouched':
                io.emit("nacho untouched", msg);
                break;
           default:
                break;
        }
   });
});
// end of socket.io logic

module.exports = socketapi;