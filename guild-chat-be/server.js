const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "*",
    },
  });

const PORT = 8080;
const CHAT_MESSAGE_EVENT = 'newChatMessage';

server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

io.on('connection', (socket) => {
    console.log('connected');
    socket.emit('connection', socket.id)

    socket.on(CHAT_MESSAGE_EVENT, (data) => {
        console.log('message received',data)
        io.emit(CHAT_MESSAGE_EVENT, data);
    });

    socket.on("disconnect", () => {
        console.log(`Client ${socket.id} diconnected`);
    });
});

