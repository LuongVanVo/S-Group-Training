import express from 'express'
import userController  from '../controllers/userController.js'
import { checkUserExistMiddleware } from '../middlewares/checkUserExistMiddleware.js'
const routerAPI = express.Router()

routerAPI.get("/", (req, res) => {
    return res.status(200).json({ message: "Hello from API" });
})

routerAPI.get("/users", userController.getUser)
routerAPI.post("/users", checkUserExistMiddleware, userController.registerUser)
routerAPI.post("/login", userController.loginUser)
export default routerAPI