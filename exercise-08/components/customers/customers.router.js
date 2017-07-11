const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// Inject controller
module.exports = function CustomerRouter(customerController) {

    const router = express.Router();
    router.use(jsonParser);

    // create a route for /customers
    router.get('/', jsonParser, (req, res) => {
        console.log('GET /customers called');
        res.status(200); // set 200 (OK) status
        // use the controller to get data
        res.send(customerController.getAll()); // send response
    });

    router.get('/count', jsonParser, (req, res) => {
        const count = customerController.getCount();
        res.status(200)
           .send({ count: count });
    });

    // create a route for /customers/:id
    // where :id is the parameter
    router.get('/:id', jsonParser, (req, res) => {  
        console.log(`GET /customers/${req.params.id} called`);

        // get the id from request.params
        // we need to make sure id is of type int
        const customerId = parseInt(req.params.id);
        // use the controller to get data
        const customer = customerController.getById(customerId);

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