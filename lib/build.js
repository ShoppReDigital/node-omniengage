const debug = require('debug');
const rp = require('request-promise');
const logger = require('../../logger');
const { root, CURRENT_EMAIL, project } = require('../config');
// const ses = require('../../../../../engage/server/conn/email/ses');
const ses = require('../ses');

const log = debug('s-emails-lib-build');

const required = require;

exports.cmd = (e) => {
  log('e', e);
  const templateFullName = e || CURRENT_EMAIL;
  if (!templateFullName) throw Error('update CURRENT_EMAIL in .env');
  console.log('templateFullName', templateFullName);
  const [layout, template] = templateFullName.split('_');
  const emailBaseDir = `${root}/${project}/server/api/${layout}/emails`;

  const { Meta, instances } = required(`${emailBaseDir}/${template}/${template}`);
  return Promise.all(instances.map((x) => {
    const { Template, group_id: groupId } = x;

    console.log('Template', Template);

    // make entry if doesnt exists in qurac email_templates
    rp({
      method: 'POST',
      url: 'http://localhost:7004/api/emailTemplates',
      json: true,
      body: {
        name: `${templateFullName}_${groupId}`,
        group_id: groupId,
        description: Meta.description,
      },
    })
      .catch(err => logger.error('buildTemplate EmailTemplate error', err, templateFullName));

    log('createTemplateAsync:Template', Template);
    return ses
      .createTemplateAsync({ Template });
  }));
};
