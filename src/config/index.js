const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  server: {
    host: process.env.HOST,
    env: process.env.ENV,
    port: process.env.PORT,
  },
  notifications: {
    publicKey: process.env.PUSH_NOTIFICATIONS_PUBLIC,
    privateKey: process.env.PUSH_NOTIFICATIONS_PRIVATE,
  },
};
