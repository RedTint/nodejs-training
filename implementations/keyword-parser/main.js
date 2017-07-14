// Load libraries
const express = require('express');
const socket = require('socket.io');
const http = require('http');

// Configs
const port = process.env.NODE_PORT || 8000;

// Instantiation
const app = express();
// socket.io requires the created server from http
const server = http.createServer(app);
// instantiate socket
const io = socket(server);

io.on('connect', client => {

    console.log(`Client with ID ${client.id} connected...`);
    
    client.on('client message', message => {
        clientActor(client, message);
    });

});

// Actor - handles commands
clientActor = (client, message) => {

    console.log('client actor received', message);
    
    parseMessage(message);

    function parseMessage(message) {
        // break the message per keywoard
        message = message.split(' ');
        const keyword = message.shift().toLowerCase();
        handleAction(keyword, message);
    }

    function handleAction(action, parameters) {
        switch(action) {
            case 'message':
                handleMessageAction(parameters);
            break;

            default:
                sendResponse('Unknown keyword. Please send HELP');
        }
    }

    function handleMessageAction(parameters) {
        if (!parameters.length) {
            sendResponse('KEYWORDS are PAYMENT, SERVICES, ETC.... e.g: HELP PAYMENT');
        } else {
            
        }
    }

    function sendResponse(message) {
        console.log('sending:' , message);
        client.emit('server response', message);
    }
}

server.listen(port, () => {
    console.log(`Listening to port ${port}`);
});