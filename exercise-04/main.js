// Exercise 04 - Accessing Route Parameters

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
app.post('/api/customers', jsonParser, (req, res) => {
  console.log('/api/customers called');
  res.status(200); // set 200 (OK) status
  res.send(data); // send response
});

// create a route for /api/customers/:id
// where :id is the parameter
app.get('/api/customers/:id', jsonParser, (req, res) => {  
  console.log(`/api/customers/${req.params.id} called`);

  // get the id from request.params
  // we need to make sure id is of type int
  const customerId = parseInt(req.params.id);
  const customer = data.filter(item => item.id === customerId);

  // Send 404 (Not Found) if no record found
  // !customer.lenght is same as customer.length === 0
  if (!customer.length) {
    res.status(404); // 404 (Not Found)
    res.send('Data not found!');
    return;
  }

  // Send customer data
  res.status(200); // 200 (OK)
  res.send(customer[0]);
});

// get port from environment variable PORT (defaults to 9999)
const port = process.env.PORT || 9999;

// start API
app.listen(port, () => {
  console.log(`You are now listening to http://localhost:${port}`);
});
