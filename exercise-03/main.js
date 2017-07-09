// Exercise 03 - Creating your first API

// import our mock data
const data = require('./mocks/data.json');

// import express framework
const express = require('express');

// import body-parser that is used by express framework
// to determine how it would interpret incoming data
const bodyParser = require('body-parser');

// initialize express
const app = express();

// tell express to parse HTTP request bodies as JSON
const jsonParser = bodyParser.json();

// create a route for /api/customers
app.get('/api/customers', jsonParser, (req, res) => {
  console.log('/api/customers called');
  res.status(200); // set 200 (OK) status
  res.send(data); // send response
});

// get port from environment variable PORT (defaults to 9999)
const port = process.env.PORT || 9999;

// start API
app.listen(port, () => {
  console.log(`You are now listening to http://localhost:${port}`);
});
