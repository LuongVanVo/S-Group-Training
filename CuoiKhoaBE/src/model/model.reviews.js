import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var reviewSchema = new mongoose.Schema({
    book: { type: mongoose.Schema.Types.ObjectId, ref: "books", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

//Export the model
const Reviews = mongoose.model('reviews', reviewSchema)

export default Reviews
