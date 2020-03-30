const log = require('debug')('@shoppre/engage/command.js');

const required = require;
const { argv } = process;
const task = argv[2];

required(`./lib/${task}`)
  .cmd()
  .then((result) => {
    log(`email-${task}:success`, result);
    process.exit(0);
  })
  .catch((error) => {
    log(`email-${task}:error`, error);
    process.exit(1);
  });
