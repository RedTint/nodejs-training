const express = require('express');
const bodyParser = require('body-parser');

const data = require('./mocks/data.json');
const jsonParser = bodyParser.json();
const app = express();

// SRP - Single Responsibility Principle
// data is injected 
const customerComponent = require('./components/customers/customers.router.js')(data);
const usersComponent = require('./components/users/users.router.js')(data);

// Set Components
app.use('/customers', customerComponent);
app.use('/users', usersComponent);
app.listen(9000);
