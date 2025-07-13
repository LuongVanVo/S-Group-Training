import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

//Export the model
const Book = mongoose.model('books', bookSchema)

export default Book
