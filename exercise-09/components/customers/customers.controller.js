// Config and Service is injected
module.exports = function CustomerController(customerService) {

    const create = (data) => {
        return new Promise((resolve, reject) => {
            // DO SOME VALIDATION, OH PLEASE!!!!
            if (!data.name) {
                reject('Name is required');
                return;
            }

            customerService.create(data)
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    reject(err);
                });
        });
        
    }
    const getAll = () => {
        return customerService.getAll();
    }

    const getById = (id) => {
        return customerService.getById(id);
    }

    const getCount = () => {
        const count = customerService.getAll().length;
        return count;
    }

    // Return methods available for the controller
    return {
        'create': create,
        'getAll': getAll,
        'getById': getById,
        'getCount': getCount
    };
}