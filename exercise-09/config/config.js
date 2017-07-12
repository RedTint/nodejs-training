/*
 * @filename config.js
 * @description configuration file
 */

// node server config
const nodePort = process.env.NODE_PORT || 9000;

// database config
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbServer = process.env.DB_SERVER;
// defaults to 1433
const dbPort = process.env.DB_PORT || 1433;
const dbName = process.env.DB_NAME;
const poolMax = 10;
const poolMin = 4;
const poolIdleTimeout = 30 * 1000;

const isComplete = () => {
  if (!dbUser || !dbPass || !dbServer || !dbName) return false;
  return true;
};

module.exports = {
  'mssql': {
    'user': dbUser,
    'password': dbPass,
    'server': dbServer,
    'database': dbName,
    'port': dbPort,
    'pool': {
      'max': poolMax, 
      'min': poolMin,
      'idleTimeoutMillis': poolIdleTimeout
    }
  },
  'node': {
    'PORT': nodePort
  },
  isComplete: isComplete
};
