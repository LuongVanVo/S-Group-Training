export function checkNameMiddleware(req, res, next) {
    let { name } = req.body
    // kiem tra ten co phai la chuoi hay khong
    if (typeof name !== 'string') {
        return res.status(400).send('Name must be a string')
    }
    // kiem tra name co phai la chuoi rong hay khong
    if (name.trim() === '') {
        return res.status(400).send('Name must not be empty')
    }
    next()
}