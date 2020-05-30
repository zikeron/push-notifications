const webpush = require('web-push');

const config = require('../../config');

webpush.setVapidDetails(
  `mailto:notifications@mailinator.com`,
  config.notifications.publicKey,
  config.notifications.privateKey,
);

module.exports = webpush;
