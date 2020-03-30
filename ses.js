const rp = require('request-promise');

exports.createTemplate = payload => rp({
  method: 'POST',
  url: `${process.env.OMNIENGAGE_URL}/api/ses/createTemplate`,
  json: true,
  body: payload,
});

exports.updateTemplate = payload => rp({
  method: 'POST',
  url: `${process.env.OMNIENGAGE_URL}/api/ses/updateTemplate`,
  json: true,
  body: payload,
});

exports.sendTemplatedEmail = payload => rp({
  method: 'POST',
  url: `${process.env.OMNIENGAGE_URL}/api/ses/sendTemplatedEmail`,
  json: true,
  body: payload,
});
