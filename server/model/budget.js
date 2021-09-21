import mongoose from 'mongoose';

const budgetSchema = new mongoose.Schema({
  userid: String,
  income : Number,
  savings : Number,
  budget : Number,
  
});

export const Budget =  mongoose.model('budgets',budgetSchema);