// inject config and mock data from main.js
module.exports = function(pool) {
    // Instantiate service and inject data
    const customerService = require('./customers.service.js')(pool);
    // Instantiate controller and inject config and service
    const customerController = require('./customers.controller.js')(customerService);
    // Instantiate router and inject controller
    const customerRouter = require('./customers.router.js')(customerController);

    return customerRouter;
}