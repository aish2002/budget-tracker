import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

export const User =  mongoose.model('users',userSchema);