import express from "express";
import members from "../controllers/controller.users.js";
import { checkEmailExist } from "../middlewares/middleware.checkEmailExist.js";
import { authTokenMiddleware, requireAdminRole } from "../middlewares/middleware.auth.js";
import { checkDueTimeMiddleware } from "../middlewares/middleware.checkDueTime.js";
// import { checkTeamIDMiddleware } from "../middlewares/middleware.checkTeamID.js";
import { checkRoleAdminMiddleware } from "../middlewares/middleware.checkRoleAdmin.js";
import { asyncHandler } from "../helper/asyncHandler.js";
import app from "../servers.js";
const routerAPI = express.Router();

routerAPI.post("/newMember", members.createMember);

// member
// register a new member
routerAPI.post("/register", checkEmailExist, members.registerMember);
routerAPI.post("/login", members.loginMember);

export default routerAPI;
