const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    provider: String,
    provider_id: String,
    token: String,
    provider_pic: String

  }
);

module.exports = mongoose.model('User', UserSchema);
