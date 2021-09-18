import mongoose, { Schema } from 'mongoose';

const activitySchema = new mongoose.Schema({
    id: String,
    topic: String,
    category: String,
    amount: Number,
},{timestamps: true});

export const Activity = mongoose.model('activities',activitySchema)