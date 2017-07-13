module.exports = function CustomerService(pool) {
    const create = (data) => {
        const promise = pool.request()
            .query(`INSERT INTO Customers(Name) VALUES('${data.name}'); SELECT @@IDENTITY AS CustomerId`);
        return promise;
    }

    // DELETE FROM Customers WHERE CustomerId=1

    const getAll = () => {
        const promise = pool.request()
            .query('SELECT * FROM Customers');
        return promise;
    }

    const getById = (id) => {
        const promise = pool.request()
            .query(`SELECT * FROM Customers WHERE CustomerId=${id}`);
        return promise;
    }

    const update = (data) => {
        const promise = pool.request()
            .query(`UPDATE Customers SET Name=${data.Name} WHERE CustomerId=${data.CustomerId}`);
        return promise;
    }

    return {
        'create': create,
        'getAll': getAll,
        'getById': getById
    };
}