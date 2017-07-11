// inject config and mock data from main.js
module.exports = function(config, data) {
    // Instantiate service and inject data
    const customerService = require('./customers.service.js')(data);
    // Instantiate controller and inject config and service
    const customerController = require('./customers.controller.js')(config, customerService);
    // Instantiate router and inject controller
    const customerRouter = require('./customers.router.js')(customerController);

    return customerRouter;
}