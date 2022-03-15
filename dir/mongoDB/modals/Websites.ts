import mongoose from 'mongoose'

const Website = new mongoose.Schema({
    name: String,
    description: String,
    url: String,
    image: String,
}, { timestamps: true });

export default mongoose.models.Website || mongoose.model('Website', Website)