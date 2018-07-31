const userController = require('./../controllers/user.ctrl');

module.exports = (router) => {
  // get a user
  router
    .route('/user/:id')
    .get(userController.getUser);

  // get a user profile
  router
    .route('/user/profile/:id')
    .get(userController.getUserProfile);

  // adds a user
  router
    .route('/user')
    .post(userController.addUser);
};
