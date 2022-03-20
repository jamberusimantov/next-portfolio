import mongoose from 'mongoose'

const Message = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    new: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.Message || mongoose.model('Message', Message)