const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketio(server, {cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}});

io.on('connection', socket =>{
    console.log("Connected to socket")

    socket.on('task', () => {
        console.log("New Task")
        io.emit('task')
    })
})

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
