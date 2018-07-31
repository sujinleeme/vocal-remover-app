const User = require('./../models/User');
const InputAudio = require('./../models/InputAudio');

module.exports = {
  addUser: (req, res, next) => {
    new User(req.body).save((err, newUser) => {
      if (err) res.sendStatus(err);
      else if (!newUser) res.sendStatus(400);
      else res.sendStatus(newUser);
      next();
    });
  },

  getUser: (req, res, next) => {
    User.findById(req.params.id).then((err, user) => {
      if (err) res.sendStatus(err);
      else if (!user) res.sendStatus(404);
      else res.sendStatus(user);
      next();
    });
  },

  getUserProfile: (req, res, next) => {
    User.findById(req.params.id).then(_user => InputAudio.find({ author: req.params.id }).then(_audios => res.json({ user: _user, inputAudios: _audios }))).catch(err => console.log(err));
  }
};
