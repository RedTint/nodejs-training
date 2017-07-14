// Load libraries
const express = require('express');
const socket = require('socket.io');
const http = require('http');

// Configs
const port = process.env.NODE_PORT || 9000;

// Mock data
const data = require('./mocks/data.json');

// Instantiate Express
const app = express();
// Create a server based off of 'http'
const server = http.createServer(app);
// Instantiate socket.io
const io = socket(server);

let clients = [];

io.on('connection', client => {
    
    console.log(`Client connected: ${client.id}`);
    clients.push(client.id);
    console.log(`# of clients connected: ${clients.length}`);

    let $interval = setInterval(() => {
        const index = Math.floor(Math.random() * (data.length-1));
        client.emit('record_feed', data[index]);
    }, 500);

    client.on('disconnect', (data, data2) => {
        console.log(`Client disconnected: ${client.id}`);
        let index = clients.indexOf(client.id);
        clients.splice(index);
        console.log(`# of clients connected: ${clients.length}`);
    });
});

app.use('/client', express.static(`${__dirname}/client`));
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/index.html`);
});

server.listen(port, () => {
    console.log(`socket.io server: listening to port ${port}`);
});



