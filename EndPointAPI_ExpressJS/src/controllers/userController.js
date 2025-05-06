import userService from '../service/userService.js'

const getUser = async (req, res) => {
    const data = await userService.getUserService()
    return res.status(200).json(data)
}

const registerUser = async (req, res) => {
    const { email, password, name } = req.body
    const data = await userService.registerUserService(email, password, name)
    return res.status(200).json(data)
}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    const data = await userService.loginUserService(email, password)
    return res.status(200).json(data)
}

const forgotPassword = async (req, res) => {
    const { email } = req.body
    const data = await userService.forgotPasswordService(email)
    return res.status(200).json(data)
}

const resetPassword = async (req, res) => {
    const { token, password, email } = req.body
    const data = await userService.resetPasswordService(token, password, email)
    return res.status(200).json(data)
}

// get amount user
const getAmountUser = async (req, res) => {
    const data = await userService.getAmountUserService()
    return res.status(200).json(data)
}

export default { getUser, registerUser, loginUser, forgotPassword, resetPassword }