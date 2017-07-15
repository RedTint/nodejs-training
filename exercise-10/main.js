// Load libraries
const express = require('express');
const socket = require('socket.io');
const http = require('http');

// Load configuration
const port = process.env.NODE_PORT || 9000;

// Load mock data
const data = require('./mocks/data.json');

// Instantiate Express
const app = express();
// Create a server based off of 'http'
const server = http.createServer(app);
// Instantiate socket.io
const io = socket(server);

// Listen to incoming connections
io.on('connection', client => {
    // print out the ID of the client that connected
    console.log(`Client connected: ${client.id}`);

    // send random data to client every 500ms
    let $interval = setInterval(() => {
        const index = Math.floor(Math.random() * (data.length-1));
        client.emit('record_feed', data[index]);
    }, 500);

    client.on('disconnect', () => {
        console.log(`Client disconnected: ${client.id}`);
    });
});

// The next two lines lets us access the client that is
// found inside the /client folder
app.use('/client', express.static(`${__dirname}/client`));
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/index.html`);
});

// Listen to HTTP server and NOT express
// This is a common mistake
server.listen(port, () => {
    console.log(`socket.io server: listening to port ${port}`);
});



