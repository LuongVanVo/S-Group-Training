import User from '../model/model.users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
dotenv.config()

const salt = 10

// get all members
const getAllMembersService = async () => {
    try {
        const users = await User.find()
        return users
    } catch(error) {
        throw new Error(error)
    }
}

// register a new member
const registerMemberService = async (name, email, password, role) => {
    try {
        // hash password
        const hashPassword = await bcrypt.hash(password, salt)
        // create a new member
        const newMember = await User.create({
            name,
            email,
            password: hashPassword,
            role: role || 'member', // default role is 'member'
            createdAt: new Date().toISOString()
        })
        return newMember
    } catch(err) {
        throw new Error(err)
    }
}
// login a get jwt token
const loginMemberService = async (email, password) => {
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return {
                success: false,
                message: 'Email or password is incorrect'
            }
        }
        // compare password
        const isMatchPassword = await bcrypt.compare(password, user.password)
        if (!isMatchPassword) {
            return {
                success: false,
                message: 'Email or password is incorrect'
            }
        } else {
            const payload = {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                createdAt: user.createdAt
            }
            const accessToken = await jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRES_IN
                }
            )
            return {
                success: true,
                message: 'Login successfully',
                accessToken: accessToken,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    createdAt: user.createdAt
                }
            }
        }
    } catch (err) {
        throw new Error(err)
    }
}

// get info member by jwt token
const getMemberByTokenService = async (token) => {
    try {
        if (!token) {
            throw new Error('Token not found')
        }
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.id).select('-password')
        if (!user) {
            throw new Error('Member not found')
        }
        return {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt
        }
    } catch (err) {
        if (err.name == 'TokenExpiredError') {
            throw new Error('Token expired')
        }
        if (err.name == 'JsonWebTokenError') {
            throw new Error('Token invalid')
        }
        throw new Error('Token not found or invalid')
    }
}


async function deleteUser(userId) {
    try {
        // find user
        const foundUser = await User.findById(userId);
        if (!foundUser) {
            return {
                success: false,
                message: 'Not found user'
            }
        }

        // delete user
        await User.deleteOne(foundUser);
        return {
            success: true,
            message: 'User deleted successfully',
            user: {
                id: foundUser._id,
                name: foundUser.name,
                email: foundUser.email,
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}
export default {
    getAllMembersService,
    registerMemberService,
    loginMemberService,
    getMemberByTokenService,
    deleteUser
}
