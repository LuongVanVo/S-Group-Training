import userModel from '../model/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
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

// send email with token, npm mailer
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

async function forgotPasswordService(email) {
    try {
        const user = await userModel.findOne({ email })
        if (!user) { 
            return {
                status: false,
                message: 'Email or password not valid'
            }
        }
        const payload = { email: user.email }
        const resetToken = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 7 * 60 } // 7 phút
        )
        user.passwordResetToken = resetToken
        user.passwordResetExpires = new Date(Date.now() + 7 * 60 * 1000)
        await user.save()

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Reset password',
            html: `<p>Your reset token is:<strong>${resetToken}</strong></p>`
        }
        await transporter.sendMail(mailOptions)
        return {
            status: true,
            message: 'Reset password email sent'
        }
    } catch (err) {
        console.log(err)
        return {
            status: false,
            message: 'Error sending reset email'
        }
    }
}

async function resetPasswordService(token, newPassword, email) {
    try {
        const user = await userModel.findOne({
            passwordResetToken: token,
            email: email,
        })
        if (!user) {
            return {
                status: false,
                message: 'Token is invalid or expired'
            }
        }
        const isExpired = user.passwordResetExpires < new Date()
        if (isExpired) {
            return {
                status: false,
                message: 'Token is expired'
            }
        }

        user.password = await bcrypt.hash(newPassword, salt)
        user.passwordResetToken = undefined
        user.passwordResetExpires = undefined
        await user.save()
        return {
            status: true,
            message: 'Password reset successfully'
        }
    } catch (err) {
        console.log(err)
        return {
            status: false,
            message: 'Error resetting password'
        }
    }
}

// get amount user
async function getAmountUserService() {
    try {
        return await userModel.countDocuments({})   
    } catch (err) {
        console.log(err)
        return null
    }
}
    
export default { 
    getUserService, 
    registerUserService,
    loginUserService,
    forgotPasswordService,
    resetPasswordService,
    getAmountUserService
}
