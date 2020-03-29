const logger = require('../logger');

const required = require;
const { argv } = process;
const task = argv[2];

required(`./lib/${task}`)
  .cmd()
  .then((result) => {
    logger.log(`email-${task}:success`, result);
    process.exit(0);
  })
  .catch((error) => {
    logger.error(`email-${task}:error`, error);
    process.exit(1);
  });
