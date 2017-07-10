/*
 * @filename config.js
 * @description configuration from environment variables
 *
 */

const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

// returns true if configs are complete
const isComplete = () => {
  if (!PORT || !DB_NAME || !DB_USER || !DB_PASS) return false;
  return true;
}

// module.exports - is included in every JS file in Node.js applications. It is used to expose functions, objects or variables in a module
module.exports = { 
  'PORT': PORT,
  'DB_NAME': DB_NAME,
  'DB_USER': DB_USER,
  'DB_PASS': DB_PASS,
  isComplete: isComplete
};
