const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

module.exports = function UsersRouter(data) {

    const router = express.Router();
    router.use(jsonParser);

    // create a route for /users
    router.get('/', jsonParser, (req, res) => {
        console.log('GET /users called');
        res.status(200); // set 200 (OK) status
        res.send(data); // send response
    });

    // create a route for /api/users/:id
    // where :id is the parameter
    router.get('/:id', jsonParser, (req, res) => {  
        console.log(`GET /users/${req.params.id} called`);

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

    return router;
};