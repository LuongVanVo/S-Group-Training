import ReviewService from '../services/services.reviews.js';
import { asyncHandler } from '../helper/asyncHandler.js';

const postReview = asyncHandler(async (req, res) => {
    const { bookId } = req.params;
    const { rating, comment } = req.body;
    
    // Validation
    if (!bookId) {
        return res.status(400).json({
            success: false,
            message: "Book ID is required"
        });
    }
    
    if (!rating || !comment) {
        return res.status(400).json({
            success: false,
            message: "Rating and comment are required"
        });
    }
    
    // FIX: Lấy userId từ req.member (được set bởi authTokenMiddleware)
    const reviewData = {
        userId: req.member._id,
        rating,
        comment
    };
    
    const newReview = await ReviewService.postReview(bookId, reviewData);
    
    return res.status(201).json({
        success: true,
        message: "Post review successfully", 
        data: newReview
    });
});

// delete a review 
const deleteReview = asyncHandler(async (req, res) => {
    const { reviewId } = req.params
    const currentUserId = req.member._id; 
    const result = await ReviewService.deleteReview(reviewId, currentUserId)
    
    return res.status(200).json({
        success: true,
        message: result.message
    })
})

export default {
    postReview,
    deleteReview
}