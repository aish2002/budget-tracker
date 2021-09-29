const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

const User =  mongoose.model('users',userSchema);
module.exports = { User }