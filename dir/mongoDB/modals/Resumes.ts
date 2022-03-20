import mongoose from 'mongoose'

const Resume = new mongoose.Schema({
    name: String,
    file: Object,
}, { timestamps: true });

export default mongoose.models.Resume || mongoose.model('Resume', Resume)