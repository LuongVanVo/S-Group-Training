import dotenv from 'dotenv';
dotenv.config()
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import userModel from '../model/user.js';


// Cấu hình Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})
console.log('Cloudinary config:', cloudinary.config())

async function uploadImageService(pathImage, email) {
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return  {
                status: false,
                message: 'User not found'
            }
        }
        // Upload ảnh lên Cloudinary, xong lấy url thêm vào database của user 
        const uploadResult = await cloudinary.uploader.upload(pathImage, {
            folder: 'upload_image',
            resource_type: 'image'
        })
        console.log(`Tệp ${pathImage} đã được upload thành công!`)
        console.log("URL: ", uploadResult.secure_url);
        // Cập nhật URL vào cơ sở dữ liệu của người dùng
        user.URL = uploadResult.secure_url
        await user.save()
        console.log(`URL đã được cập nhật cho người dùng ${email}`)
        return {
            status: true,
            message: 'Upload image success',
            url: uploadResult.secure_url
        }       
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}

export default {
    uploadImageService
}