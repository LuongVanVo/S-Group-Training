import dotenv from 'dotenv';
dotenv.config()
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';


(async function () {
    try {
        // Cấu hình Cloudinary
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        })  
        console.log('Cloudinary config:', cloudinary.config())

        // Đường dẫn đến tệp tin cần tải lên
        const folderPath = './Chapter1'
        
        // Lấy danh sách tệp tin trong thư mục
        const files = fs.readdirSync(folderPath).filter(file => 
            file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')
        )
        console.log(`Tìm thấy ${files.length} tệp tin trong thư mục ${folderPath}`)

        // Upload từng ảnh
        for (const file of files) {
            const filePath = path.join(folderPath, file)
            console.log(`Đang upload: ${filePath}`)
            
            try {
                const uploadResult = await cloudinary.uploader.upload(filePath, {
                    folder: 'upload_image',
                    resource_type: 'image'
                })
                console.log(`Tệp ${file} đã được upload thành công!`)
                console.log("URL: ", uploadResult.secure_url);
                
            } catch (error) {
                console.error(`Lỗi khi upload tệp ${file}:`, error)
            }
        }
        console.log(`Đã upload xong tất cả ảnh`)
    } catch (error) {
        console.error('Error uploading file:', error);
    }
})()
