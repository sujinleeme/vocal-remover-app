const user = require('./user');
const inputAudio = require('./inputAudio');

module.exports = (router) => {
  user(router);
  inputAudio(router);
};
