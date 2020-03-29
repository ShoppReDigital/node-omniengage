const path = require('path');

module.exports = {
  root: path.normalize(`${__dirname}/../../../..`),
  CURRENT_EMAIL: process.env.CURRENT_EMAIL || 'welcome_signup',
  project: 'lambda',
  EMAIL_SOURCE: 'support@shopprecouriers.com',
  EMAIL_TO: 'tech.shoppre@gmail.com',
};
