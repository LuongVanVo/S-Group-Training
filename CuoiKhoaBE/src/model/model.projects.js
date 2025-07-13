import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    // THAY ĐỔI: Các field theo nhu cầu của bạn
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'completed', 'pending'],
        default: 'pending'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Project', projectSchema)