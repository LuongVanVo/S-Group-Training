import express from "express";
import books from "../controllers/controller.books.js";
import { checkEmailExist } from "../middlewares/middleware.checkEmailExist.js";
import { authTokenMiddleware, requireAdminRole } from "../middlewares/middleware.auth.js";
import { checkDueTimeMiddleware } from "../middlewares/middleware.checkDueTime.js";
// import { checkTeamIDMiddleware } from "../middlewares/middleware.checkTeamID.js";
import { checkRoleAdminMiddleware } from "../middlewares/middleware.checkRoleAdmin.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import app from "../servers.js";
const routerAPI = express.Router();

routerAPI.get('/', books.getAllBooks);
routerAPI.get('/:bookId', books.getBookDetails);
routerAPI.use(authTokenMiddleware);
routerAPI.post('/', requireAdminRole, books.addnewBook);


export default routerAPI;
