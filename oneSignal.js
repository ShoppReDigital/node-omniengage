const rp = require('request-promise');

exports.send = payload => rp({
  method: 'POST',
  url: `${process.env.OMNIENGAGE_URL}/api/oneSignal/send`,
  json: true,
  body: payload,
});
