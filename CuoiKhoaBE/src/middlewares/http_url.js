export const loggerMiddleware = (req, res, next) => {
    const method = req.method;
    const url = req.originalUrl || req.url;

    console.log(`Method: ${method}, URL: ${url}`);
    next();
}