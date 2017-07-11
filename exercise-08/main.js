const express = require('express');
const bodyParser = require('body-parser');

const data = require('./mocks/data.json');
const jsonParser = bodyParser.json();
const app = express();

// SRP - Single Responsibility Principle
// Dependency Injection Pattern
const customerComponent = require('./components/customers')(null, data);
const usersComponent = require('./components/users/users.router.js')(null, data);

// Bind components to express instance
app.use('/customers', customerComponent);
app.use('/users', usersComponent);

app.listen(9000);
