import uploadFileService from "../service/uploadFileService.js";

const uploadImage = async (req, res) => {
    try {
        const { email } = req.body
        // Lấy đường dẫn tệp từ url
        const { pathImage } = req.query
        console.log("Path image: ", pathImage)

        // Upload ảnh lên Cloudinary và cập nhật URL vào cơ sở dữ liệu của người dùng
        const data = await uploadFileService.uploadImageService(pathImage, email)
        return res.status(200).json(data)
    } catch (err) {
        console.error('Error in uploadImage controller:', err)
        return res.status(500).json({
            status: false,
            message: 'Internal server error'
        })
    }
}

export default { uploadImage }