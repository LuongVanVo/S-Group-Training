import express from "express";
import users from "../controllers/controller.users.js";
import { checkEmailExist } from "../middlewares/middleware.checkEmailExist.js";
import { authTokenMiddleware, requireAdminRole } from "../middlewares/middleware.auth.js";
import { checkDueTimeMiddleware } from "../middlewares/middleware.checkDueTime.js";
// import { checkTeamIDMiddleware } from "../middlewares/middleware.checkTeamID.js";
import { checkRoleAdminMiddleware } from "../middlewares/middleware.checkRoleAdmin.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import app from "../servers.js";
const routerAPI = express.Router();


routerAPI.use(authTokenMiddleware);

// get all user
routerAPI.get("/", requireAdminRole, asyncHandler(users.getAllMember));
// get info member by jwt token
routerAPI.get("/me", users.getMemberByToken);
// delete user by id
routerAPI.delete('/:userId', requireAdminRole, users.deleteUser);


export default routerAPI;
