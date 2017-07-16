// load & instantiate libraries
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

let clients = {};

io.on('connection', client => {

    console.log(`${client.id} connected`);

    client.on('disconnect', () => {
        console.log(`${client.id} disconnected`);
    });

    client.on('join chat', who => {
        console.log('join chat called:', who);
        // save nickname (who)
        clients[client.id] = who;
        // update client that he/she successfully joined
        client.emit('update', 'You have joined the chat room');
        // send message to other users
        client.broadcast.emit('update', `${who} has joined chat`);
        // send updated list of people
        io.emit('update people', clients);
    });

    client.on('send message', message => {
        console.log('send message called');
        // get nickname
        const who = clients[client.id];
        
        if (!message.sendTo) {
            // send chat update to users
            io.sockets.emit('chat', { 
                who: who, 
                message: message.message 
            });
        } else {
            // send chat to specific socketId / user
            client.broadcast
                .to(message.sendTo)
                .emit('chat', { 
                    who: who, 
                    message: message.message 
                });
        }
    });

    client.on('exit chat', () => {
        console.log('exit chat called');
        // get nickname
        const who = clients[client.id];
        // send message to users
        client.broadcast.emit('update', `${who} has left the chat room`);
        // delete client registry
        delete clients[client.id];
    });

});

// host client
app.use('/client', express.static(`${__dirname}/client`))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/index.html`);
});

// listen
http.listen(port, () => {
    console.log(`Listening on *:${port}`);
});
