import express from "express";
import review from "../controllers/controller.reviews.js";
import { authTokenMiddleware } from "../middlewares/middleware.auth.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import { checkRatingReview } from "../middlewares/checkRating.js";

const routerAPI = express.Router();

// Áp dụng auth middleware cho tất cả routes
routerAPI.use(authTokenMiddleware);

routerAPI.post("/books/:bookId", checkRatingReview, review.postReview);
routerAPI.delete("/:reviewId", review.deleteReview);

export default routerAPI;