// import express from 'express' // dùng để tạo server
// import bodyParser from 'body-parser' // dùng để phân tích body của request
// import fs from 'fs' // dùng để đọc file json
// import { checkIdMiddleware } from './middlewares/checkIdMiddleware.js'
// import { checkNameMiddleware } from './middlewares/checkNameMiddleware.js' // dùng để kiểm tra tên
// import { checkAgeMiddleware } from './middlewares/checkAgeMiddleware.js'
// // dùng để đọc file json
// const app = express() // dùng để tạo server
// const port = 3001
// app.use(bodyParser.json())

// // read file users.json
// const data = JSON.parse(fs.readFileSync('../users.json')) // đọc file json và chuyển đổi thành mảng
// data.forEach((user) => {
//     console.log(`${user.name}: ${user.age}`)
// })

// // app.method (path, callback) dùng để định nghĩa các route cho server
// // app.get dùng để định nghĩa route cho phương thức GET
// app.get('/users', (req, res) => {
//     res.status(200).json(data) // gửi dữ liệu từ server về client với mã trạng thái 200
// })

// // sort by id
// app.get('/users/sort', (req, res) => {
//     const { sort } = req.query
//     const myUsers = data.slice() // copy array
//     // sort by id
//     if (sort === 'userId_asc') {
//         myUsers.sort((a, b) => a.id - b.id)
//     } else if (sort === 'userId_desc') {
//         myUsers.sort((a, b) => b.id - a.id)
//     }
//     res.send(myUsers)
// })
// // modify user by id
// app.put('/users/:id',checkIdMiddleware, (req, res) => {
//     const { id } = req.params
//     console.log("ID la: " + id)
    
//     const { name, age } = req.body
//     let myUsers = data.slice() // copy array
//     myUsers = myUsers.map(user => {
//         if (user.id === parseInt(id)) {
//             // trả về user đã sửa đổi
//             // nếu không có name và age thì không sửa đổi
//             return {
//                 ...user,
//                 name,
//                 age
//             }
//         }
//         return user
//     })
//     res.status(200).send(myUsers)
// })
// // delete user by id
// app.delete('/users/:id',checkIdMiddleware, (req, res) => {
//     const { id } = req.params
    
//     let myUsers = data.slice() // copy array
//     myUsers = myUsers.filter(user => user.id !== parseInt(id))
//     res.send(myUsers)
// })
// // add new user
// app.post('/users',checkNameMiddleware, checkAgeMiddleware, (req, res) => {
//     const { name, age } = req.body
//     const newUser = {
//         id: data.length + 1,
//         name,
//         age
//     }
//     data.push(newUser)
//     res.status(201).send(data) 
// })

// // add new user (write new user into users.json)
// app.post('/users/add',checkNameMiddleware, checkAgeMiddleware, (req, res) => {
//     const { name, age } = req.body
//     const filePath = '../users.json'
//     let rawData = fs.readFileSync(filePath) // read file
//     let users = JSON.parse(rawData) // convert to array
//     const newUser = {
//         id: users.length + 1,
//         name,
//         age
//     }
//     users.push(newUser)
//     fs.writeFileSync(filePath, JSON.stringify(users, null, 4))
//     const data = [...users]
//     res.send(data)
// })
// app.get('/', (req, res) => {
//   res.send('Luong Van Vo')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
//   console.log(`http://localhost:${port}`);
// })