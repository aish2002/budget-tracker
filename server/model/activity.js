const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    userid: String,
    topic: String,
    category: String,
    amount: Number,
    status: String
},{timestamps: true});

const Activity = mongoose.model('activities',activitySchema)
module.exports = {Activity}