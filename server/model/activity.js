import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
    userid: String,
    topic: String,
    category: String,
    amount: Number,
    status: String
},{timestamps: true});

export const Activity = mongoose.model('activities',activitySchema)