const mongoose = require('mongoose');

const InputAudioSchema = new mongoose.Schema(
  {
    title: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }
);

InputAudioSchema.methods.addAuthor = (author_id) => {
  this.author = author_id;
  return this.save();
};

InputAudioSchema.methods.getUserInputAudio = (_id) => {
  InputAudioSchema.find({ author: _id }).then(audio => audio);
};

module.exports = mongoose.model('InputAudio', InputAudioSchema);
