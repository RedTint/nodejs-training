// load libraries
const ngrok = require('ngrok'); // to allow public access while testing
const app = require('express')();
const http = require('http');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const server = http.Server(app);

// load configs
const port = process.env.PORT || 80;
const pageToken = '';
const pageID = '';
const validationToken = '';
const appID = '';
const appSecret = '';

// ************ BOT STARTS HERE ***************** //
const MessengerPlatform = require('facebook-bot-messenger');
const options = { pageID, appID, appSecret, validationToken, pageToken };
// instantiate bot
const bot = MessengerPlatform.create(options, server);

// Set middleware for bot.webhook
app.use(bot.webhook('/webhook'));
// Listen to events
bot.on(MessengerPlatform.Events.MESSAGE, function(userId, message) {
    console.log(userId);
    console.log(message);
    console.log('message:', message.getText());
    bot.sendTextMessage(userId, 'I can hear you!!!');
});
// ************ BOT ENDS HERE ***************** //

// send message to user from API
app.post('/send', jsonParser, (req, res) => {
    console.log(req.body);
    const message = req.body['message'];
    const userId = req.body['userId'];

    console.log(`Attempting to send message to ${userId}`);
    bot.sendTextMessage(userId, message);
    res.sendStatus(200);
});

// make your localhost public
ngrok.connect((err, url) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    // Display publicly accessible API
    console.log(`Public URL: ${url}`);
});

app.get('/', (req, res) => {
    res.send('Hello world');
});

// listen to port
server.listen(port);