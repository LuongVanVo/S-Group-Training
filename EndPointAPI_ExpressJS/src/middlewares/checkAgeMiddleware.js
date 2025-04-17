export function checkAgeMiddleware(req, res, next) {
    let { age } = req.body
    if (isNaN(age)) {
        return res.status(400).send('Age must be an integer')
    }
    if (age < 0) {
        return res.status(400).send('Age must be greater than 0')
    }
    next()
}