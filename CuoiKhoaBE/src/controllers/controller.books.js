import BookService from '../services/services.books.js';
import { asyncHandler } from '../helper/asyncHandler.js';
// add new book
const addnewBook = asyncHandler(async (req, res) => {
    const bookData = req.body 
    const newBook = await BookService.addNewBook(bookData)
    
    return res.status(201).json({
        success: true,
        message: "new book created successfully", 
        data: newBook
    })
})

// get all book
const getAllBooks = asyncHandler(async (req, res) => {
    const bookData = req.body 
    const newBook = await BookService.getAllBooks()
    
    return res.status(201).json({
        success: true,
        message: "get all list books successfully", 
        data: newBook
    })
})

// get book details
const getBookDetails = asyncHandler(async (req, res) => {
    const { bookId } = req.params
    const bookDetails = await BookService.getBookDetails(bookId)
    
    return res.status(200).json({
        success: true,
        message: "Get book details successfully", 
        data: bookDetails
    })
})

export default {
    addnewBook,
    getAllBooks,
    getBookDetails
}