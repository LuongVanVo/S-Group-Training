import dotenv from 'dotenv'
import express from 'express'
import routerAPI from './routes/api.js'
import home from './controllers/homeController.js'
import connection from './config/database.js'
dotenv.config()

const app = express()
const port = process.env.PORT || 8000

// using moongoose to connect to mongodb
await connection()

app.use(express.json())
app.get('/', home)
app.use('/api', routerAPI)

try {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
        console.log(`http://localhost:${port}`);
    })
} catch (error) {
    console.log(">>> Error connect to DB: ", error)
}