export function checkIdMiddleware(req, res, next) {
    let { id } = req.params
    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).send('Id must be an integer')
    }
    if (parseInt(id) < 0) {
        return res.status(400).send('Id must be greater than 0')
    }
    next()
} 