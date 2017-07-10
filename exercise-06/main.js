/*
 * @filename main.js
 * @description entrypoint for this node.js application
 */

const config = require('./config/config.js');

// check if configs are complete else exit
if (!config.isComplete()) {
  console.log('Missing configuration. Exiting...');
  process.exit(1);
}

// display config
console.log(`Database User: ${config.DB_USER}`);
console.log(`Database Password: ${config.DB_PASS}`);
console.log(`Database Name: ${config.DB_NAME}`);
console.log(`Port: ${config.PORT}`);
