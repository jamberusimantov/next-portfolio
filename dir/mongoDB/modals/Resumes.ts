import mongoose from 'mongoose'

const Resume = new mongoose.Schema({
    name: String,
    description: String,
    file: String,
}, { timestamps: true });

export default mongoose.models.Resume || mongoose.model('Resume', Resume)