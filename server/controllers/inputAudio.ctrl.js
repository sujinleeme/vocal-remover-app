const fs = require('fs');
const InputAudio = require('./../models/InputAudio');
const User = require('./../models/User');

module.exports = {
  addInputAudio: (req, res, next) => {
    const { text } = req.body;
    // check audio files
    // if files.audio
    //    upload
    // else
    saveInputAudio({ title });

    const saveInputAudio = (obj) => {
      new InputAudio(obj).save((err, audio) => {
        if (err) res.sendStatus(err);
        else if (!audio) res.sendStatus(400);
        else {
          return InputAudio.addAuthor(req.body.author_id).then(_audio => res.sendStatus(_audio));
        }
        next();
      });
    };
  },

  getAll: (req, res, next) => {
    InputAudio.find(req.params.id)
      .populate('author');
  },

  /**
	 * audio_id
	 */
  getInputAudio: (req, res, next) => {
    InputAudio.findById(req.params.id)
      .populate('author');
  }
};
