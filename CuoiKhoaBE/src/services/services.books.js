import Book from '../model/model.books.js'
import Reviews from '../model/model.reviews.js'
import dotenv from 'dotenv'
dotenv.config()

// add new book
const addNewBook = async (bookData) => {
    try {
        bookData = {
            title: bookData.title,
            author: bookData.author,
            description: bookData.description
        }
        const newBook = await Book.create(bookData)
        return newBook
    } catch (error) {
        throw new Error(error.message || error)
    }
}

// get all books
const getAllBooks = async () => {
    try {
        const books = await Book.find()
        if (!books) {
            return {
                message: "List books empty"
            }
        }
        return books
    } catch (error) {
        throw new Error(error.message || error)
    }
}

// lấy chi tiết sách và các bài đánh giá của nó 
const getBookDetails = async (bookId) => {
    try {
        const book = await Book.findById(bookId)
        if (!book) {
            throw new Error('Book not found')
        }
        
        const reviews = await Reviews.find({ book: bookId })
            .populate('user', 'userName email') 
            .sort({ createdAt: -1 })

        const totalReviews = reviews.length
        const averageRating = totalReviews > 0 
            ? Number((reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews).toFixed(1))
            : 0

        return {
            book: book,
            reviews: reviews,
            stats: {
                totalReviews,
                averageRating
            }
        }
    } catch (err) {
        throw new Error(err.message || err)
    }
}
export default {
    addNewBook,
    getAllBooks,
    getBookDetails
}
