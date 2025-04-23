// check user exist middleware
import userModel from '../model/user.js'
export const checkUserExistMiddleware = async (req, res, next) => {
    // check user exist
    const { email } = req.body
    const user = await userModel.findOne({ email })
    if (user) {
        return res.status(400).json({
            status: false,
            message: 'User already exists'
        })
    }
    next()
}