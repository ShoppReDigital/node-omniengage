const rp = require('request-promise');

const { OMNIENGAGE_URL } = process.env;

exports.create = async (data, objectType) => {
  if (!objectType) return Promise.reject({ code: 400, messaage: '' });
  const comment = rp({
    method: 'POST',
    uri: `${OMNIENGAGE_URL}/api/public/${objectType}/${data.object_id}/comments`,
    body: data,
    json: true,
  });

  return comment;
};
