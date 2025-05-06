import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: String },
    passwordResetToken: { type: String },
    passwordResetExpires: { type: Date },
    URL: { type: String },
})

const userModel = mongoose.model('users', userSchema)

export default userModel