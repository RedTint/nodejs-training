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

        customerController.getAll()
            .then(result => {
                res.status(200)
                   .send(result.recordset);
            })
            .catch(err => {
                res.status(500)
                   .send('Something went wrong');
            });
    });

    router.post('/', jsonParser, (req, res) => {
        
        customerController.create(req.body)
            .then(result => {
                console.log(result);
                res.sendStatus(201);
            })
            .catch(err => {
                res.status(500)
                   .send('Something went wrong');
            });

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

        customerController.getById(customerId)
            .then(result => {
                const recordset = result.recordset;
                if (!recordset.length) {
                    res.status(404); // 404 (Not Found)
                    res.send('Date not found');
                    return;
                }

                res.status(200);
                res.send(recordset[0]);
            })
            .catch(err => {
                res.status(500)
                   .send('Something went wrong');
            });
    });

    return router;
};