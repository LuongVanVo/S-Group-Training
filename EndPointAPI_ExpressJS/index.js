const express = require('express') // dùng để tạo server
const bodyParser = require('body-parser') // dùng để parse dữ liệu từ client gửi lên server
// dùng để đọc file json
const app = express() // dùng để tạo server
const port = 3001
app.use(bodyParser.json())

// read file users.json
const data = require('./users.json')
data.forEach((user) => {
    console.log(`${user.name}: ${user.age}`)
})

// app.method (path, callback) dùng để định nghĩa các route cho server
// app.get dùng để định nghĩa route cho phương thức GET
app.get('/users', (req, res) => {
    // res.send(data) // gửi dữ liệu từ server về client
    res.status(200).json(data) // gửi dữ liệu từ server về client với mã trạng thái 200
})

// sort by id
app.get('/users/sort', (req, res) => {
    const { sort } = req.query
    const myUsers = data.slice() // copy array
    // sort by id
    if (sort === 'userId_asc') {
        myUsers.sort((a, b) => a.id - b.id)
    } else if (sort === 'userId_desc') {
        myUsers.sort((a, b) => b.id - a.id)
    }
    res.send(myUsers)
})
// modify user by id
app.put('/users/:id', (req, res) => {
    const { id } = req.params
    const { name, age } = req.body
    if (!Number.isInteger(parseInt(id)) || parseInt(id) < 0) {
        return res.status(400).send('Id must be an integer')
    }
    if (age < 0 || !Number.isInteger(age)) {
        return res.status(400).send('Age must be a positive integer')
    }
    if (typeof name !== 'string' || name.trim() === '') {
        return res.status(400).send('Name must be a string and not empty')
    }
    let myUsers = data.slice() // copy array
    myUsers = myUsers.map(user => {
        if (user.id === parseInt(id)) {
            // trả về user đã sửa đổi
            // nếu không có name và age thì không sửa đổi
            return {
                ...user,
                name,
                age
            }
        }
        return user
    })
    res.status(200).send(myUsers)
})
// delete user by id
app.delete('/users/:id', (req, res) => {
    const { id } = req.params
    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).send('Id must be an integer')
    }
    let myUsers = data.slice() // copy array
    myUsers = myUsers.filter(user => user.id !== parseInt(id))
    res.send(myUsers)
})
// add new user
app.post('/users', (req, res) => {
    const { name, age } = req.body
    const newUser = {
        id: data.length + 1,
        name,
        age
    }
    if (age < 0 || !Number.isInteger(age)) {
        return res.status(400).send('Age must be a positive integer')
    }
    data.push(newUser)
    res.status(200).send(data) 
})
// add new user (write new user into users.json)
const fs = require('fs') // dùng để đọc file json
app.post('/users/add', (req, res) => {
    const { name, age } = req.body
    const filePath = './users.json'
    let rawData = fs.readFileSync(filePath) // read file
    let users = JSON.parse(rawData) // convert to array
    const newUser = {
        id: users.length + 1,
        name,
        age
    }
    users.push(newUser)
    fs.writeFileSync(filePath, JSON.stringify(users, null, 4))
    const data = [...users]
    res.send(data)
})
app.get('/', (req, res) => {
  res.send('Luong Van Vo')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`http://localhost:${port}`);
})