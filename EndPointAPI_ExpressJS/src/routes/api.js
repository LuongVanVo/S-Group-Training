import express from 'express'
import userController  from '../controllers/userController.js'
import uploadFileController from '../controllers/uploadFileController.js'
import { checkUserExistMiddleware } from '../middlewares/checkUserExistMiddleware.js'

const routerAPI = express.Router()

routerAPI.get("/", (req, res) => {
    return res.status(200).json({ message: "Hello from API" });
})

routerAPI.get("/users", userController.getUser)
routerAPI.post("/users", checkUserExistMiddleware, userController.registerUser)
routerAPI.post("/login", userController.loginUser)

routerAPI.post("/forgot-password", userController.forgotPassword)
routerAPI.post("/reset-password", userController.resetPassword)

routerAPI.post("/upload-image", uploadFileController.uploadImage)
export default routerAPI