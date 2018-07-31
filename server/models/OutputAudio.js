const mongoose = require('mongoose');

const OutputAudioSchema = new mongoose.Schema(
  {
    text: String,
    title: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }
);

OutputAudioSchema.methods.addAuthor = (author_id) => {
  this.author = author_id;
  return this.save();
};

OutputAudioSchema.methods.getUserInputAudio = (_id) => {
  OutputAudioSchema.find({ author: _id }).then(audio => audio);
};

module.exports = mongoose.model('OutputAudio', OutputAudioSchema);
