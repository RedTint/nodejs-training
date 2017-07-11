// Config and Service is injected
module.exports = function CustomerController(config, customerService) {

    const getAll = () => {
        let customers =customerService.getAll();
        // modify data here
        return customers;
    }

    const getById = (id) => {
        let customer = customerService.getById(id);
        // modify data in here
        return customer;
    }

    const getCount = () => {
        const count = customerService.getAll().length;
        return count;
    }

    // Return methods available for the controller
    return {
        'getAll': getAll,
        'getById': getById,
        'getCount': getCount
    };
}