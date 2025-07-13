import Reviews from '../model/model.reviews.js'
import Books from '../model/model.books.js'
import Users from '../model/model.users.js'

// post a review
const postReview = async (bookId, reviewData) => {
    try {
        const book = await Books.findById(bookId);
        if (!book) {
            throw new Error('Book not found');
        }
        
        const user = await Users.findById(reviewData.userId);
        if (!user) {
            throw new Error('User not found');
        }
        
        const existingReview = await Reviews.findOne({
            book: bookId,
            user: reviewData.userId
        });
        if (existingReview) {
            throw new Error('You have already reviewed this book');
        }
        
        const newReview = await Reviews.create({
            book: bookId,
            user: reviewData.userId,
            rating: reviewData.rating,
            comment: reviewData.comment,
        });

        return newReview;
    } catch (error) {
        throw new Error(error.message || error);
    }
}

// Xóa bài đánh giá của chính bạn 
const deleteReview = async (reviewId, currentUserId) => {
    try {
        const review = await Reviews.findById(reviewId);
        if (!review) {
            throw new Error('Review not found');
        }
        
        const reviewOwnerId = review.user.toString();
        if (reviewOwnerId !== currentUserId.toString()) {
            throw new Error('You can only delete your own reviews');
        }

        await Reviews.findByIdAndDelete(reviewId);
        return { message: 'Review deleted successfully' };
    } catch (error) {
        throw new Error(error.message || error);
    }
}

export default {
    postReview,
    deleteReview
}