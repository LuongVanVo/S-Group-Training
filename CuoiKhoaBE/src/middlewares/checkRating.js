export const checkRatingReview = async (req, res, next) => {
    const { rating } = req.body;
    if (!rating) {
        return res.status(400).send({
            message: "rating is required"
        })
    }
    try {
        if (rating < 0 || rating > 5) {
            return res.status(400).json({ message: 'rating in [1,5]' })
        }
    } catch (err) {
        return res.status(500).send({
            message: 'Internal server error'
        })
    }
}