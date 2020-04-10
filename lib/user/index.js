const rp = require('request-promise');

const { OMNIENGAGE_URL } = process.env;

exports.signup = async (data) => {
  const user = rp({
    method: 'POST',
    uri: `${OMNIENGAGE_URL}/api/users`,
    body: data,
    json: true,
  });

  return user;
};

