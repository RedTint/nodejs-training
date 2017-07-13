/*
 * @filename main.js
 * @description Entrypoint
 */

// Load libraries
const express = require('express');
const sql = require('mssql');
const os = require('os');

// Load config
const config = require('./config/config.js');
const dbConfig = config.mssql;
const port = config.node.PORT;

// Exit if config is incomplete
if (!config.isComplete()) {
  console.error('Missing configuration. Exiting...');
  process.exit(1);
}

// Initialize Express
const app = express();

// Initialize Pool
// 'pool' in here is the actual pool with open connections
new sql.ConnectionPool(dbConfig)
  .connect()
  .then(pool => {

    // Load components
    const customerComponent = require('./components/customers')(pool);

    // Display which URL has been called
    app.use((req, res, next) => {
      console.log(`URL called: ${req.url}`);
      next();
    });    

    // Bind components
    app.use('/customers', customerComponent);

    // Start Express
    app.listen(port, () => {
      console.log(`api-server: Listening to ${os.hostname()}:${port}`);
    });

  })
  .catch(err => {
    console.error('Failed to initialize MSSQL pool');
    console.error(err);
    process.exit(1);
  });

sql.on('error', err => {
  console.log('sqlOnError:');
  console.error(err);
});

process.on('SIGTERM', () => {
  pool.close();
});