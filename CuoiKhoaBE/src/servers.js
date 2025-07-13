import dotenv from "dotenv";
import express from "express";
import routerAuth from "./routes/routes.auth.js";
import routerUser from './routes/routes.users.js';
import routerBook from './routes/routes.books.js';
import routerReview from './routes/routes.review.js';
import connection from "./config/config.database.js";
import { errorHandler } from "./middlewares/middleware.errorHandler.js";
import { loggerMiddleware } from "./middlewares/http_url.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 2309;

// using moongoose to connect to mongodb
await connection();

app.use(loggerMiddleware)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", routerAuth);
app.use('/users', routerUser);
app.use('/books', routerBook);
app.use('/reviews', routerReview);
app.use(errorHandler);

try {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
  });
} catch (error) {
  console.log(">>> Error connect to DB: ", error);
  console.log(`>>> stack ${error.stack}`);

}
export default app;