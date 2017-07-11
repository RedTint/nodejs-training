module.exports = function CustomerService(data) {
    const getAll = () => {
        return data;
    }

    const getById = (id) => {
        // get the id from request.params
        // we need to make sure id is of type int
        const customerId = parseInt(id);
        const customer = data.filter(item => item.id === customerId);
        return customer;
    }

    return {
        'getAll': getAll,
        'getById': getById
    };
}