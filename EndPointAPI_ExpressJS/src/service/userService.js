import userModel from '../model/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const salt = 10
// get user
const getUserService = async () =>{
    try {
        const users = await userModel.find({})
        return users
    } catch (err) {
        console.log(err);
        return null
    }
}

// register 
const registerUserService = async (email, password, name) => {
    try {
        // hash password
        const hashPassword = await bcrypt.hash(password, salt)
        // save user to database
        let newUser = await userModel.create({
            email,
            password: hashPassword,
            name,
            createdAt: new Date().toISOString()
        })
        return newUser
    } catch (err) {
        console.log(err)
        return null
    }
}

// login
const loginUserService = async (email, password) => {
    try {
        // find user by email
        const user = await userModel.findOne({ email })
        if (!user) {
            return {
                status: false,
                message: 'Email or password not valid'
            }
        } 
        // compare password
        const isMatchPassword = await bcrypt.compare(password, user.password)
        if (!isMatchPassword) {
            return {
                status: false,
                message: 'Email or password not valid'
            }
        } else {
            // if user exist
            // create token
            const payload = {
                email: user.email,
                name: user.name,
            }
            const accessToken = jwt.sign(
                payload, 
                process.env.JWT_SECRET, 
                {
                    expiresIn: process.env.JWT_EXPIRES_IN
                }
            );
            return {
                status: true,
                message: 'Login success',
                accessToken,
                user: {
                    email: user.email,
                    name: user.name,
                    createdAt: user.createdAt
                }
            }
        }
        
    } catch (err) {
        console.log(err)
        return null
    }
}
export default { 
    getUserService, 
    registerUserService,
    loginUserService
}
