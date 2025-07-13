import jwt from 'jsonwebtoken';
import Member from '../model/model.users.js';

// middleware kiểm tra xem token ở trong bearer là có hợp lệ không 
export const authTokenMiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).send({
            message: "Access denied. Please provide token",
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;
        const member = await Member.findById(userId).select('-password');
        if (!member) {
            return res.status(401).send({
                message: "Access denied. Invalid token",
            });
        }
        req.member = member; // lưu thông tin thành viên vào req để sử dụng trong các route tiếp theo
        next();
    } catch (error) {
        console.error(">>> Error in authTokenMiddleware: ", error);
        return res.status(401).send({
            message: "Access denied. Invalid token",
        })
    }
}

// middleware kiểm tra xem token có hợp lệ và có quyền admin không
export const requireAdminRole = (req, res, next) => {
    if (!req.member || req.member.role !== 'admin') {
        return res.status(403).send({
            message: "Access denied. Admin role required",
        });
    }
    next();
}

// check login
export const requireLogin = (req, res, next) => {
    if (!req.member) {
        return res.status(401).send({
            message: "Access denied. Please login",
        });
    }
    next();
}