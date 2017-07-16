// load libraries
const winston = require('winston');
const express = require('express');

// configure Winston logger
// define transports
// tranport - methods of logging (e.g: console logs, file logs, 3rd-party API logs, etc.)
const tranports = [
    // display logs in console
    new winston.transports.Console({
        level: 'debug',
        handleExceptions: true,
        colorize: true
    }),
    // store logs in { filename: /path/to/file }
    new winston.transports.File({ filename: 'somefile.log' })
];
// instantiating winston logger
var logger = new winston.Logger({
    transports: tranports
});

// instantiate app
const app = express();

// create some route we can listen to and test the logs
app.get('/', (req, res) => {
    // use logger
    logger.log('info', `This is an 'info' log`);
    logger.log('error', `This is an 'error' log`);
    res.send('Ongoing: testing logs');
})

// create some logs every 5000 seconds
setInterval(() => {
    logger.log('info', 'Logging every 5 seconds');
}, 5000)

const port = 3000;
app.listen(3000, () => {
    logger.log('info', `Listening to port ${port}`);
});