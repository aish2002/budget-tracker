const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  userid: String,
  income : Number,
  savings : Number,
  budget : Number,
  
});
 
const Budget =  mongoose.model('budgets',budgetSchema);
module.exports = {Budget}