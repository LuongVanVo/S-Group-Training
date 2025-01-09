// Hàm

// function sum(a, b = 1) {
//     return a + b
// }

// function func(...arr) {
//     console.log(arr);
// }
// console.log(sum(2, 3))
// console.log(sum()) //  không truyền tham số thì NaN
// console.log(sum(2))

// console.log(func(2, 3, 4, 5))


// string
//  thuong khai bao string la khai bao let
let str ='hihi' // trong ngoai phai khac dau nhay
// let a = 3
// // let str1 = 'Number: ${a}'
// console.log(str1)
// console.log(str.length());

// str trim
// console.log(str.trim())


let str1 = 1 + 2 + "abc"
let str2 = 'abc' + 1 + 2
console.log(str1)
console.log(str2)
console.log(str1 + str2)

// split
let str3 = "1,2,3"
console.log(str3.split(','))
console.log(str3.split())

// uppercase, lowercase

// number: ep kieu

// ARRAY : thuong khai bao la const

const arr = [1, 2, 3, 4]
console.log(arr.length)

arr.push(5) // them phan tu vao cuoi mang
console.log(arr)
arr.pop() // xoa phan tu o cuoi
console.log(arr)

arr.push(6, 7, 8) // co the them nhieu phan tu vao cuoi mang
console.log(arr)

// them vao dau mang
arr.unshift(-1, 0)
console.log(arr)

// xoa phan tu dau tien o dau mang
arr.shift()
console.log(arr)

// tim chi so cua phan tu, neu mang co nhieu phan tu giong nhau => lay phan tu dau tien xuat hien
console.log(arr.indexOf(6))

console.log(arr.lastIndexOf(7)) // nguoc lai voi indexOf, neu mang cos nhieu phan tu giong nhau => lay phan tu cuoi cung xuat hien

// chuyen mang thanh chuoi
console.log(arr.join(':'))

// duyet mang bang for each
// arr.forEach((number, indexNumber, array))

function sum(a, b) {
    return a + b
}

// function SumAll(sum) {
//     let a = () => {
//         console.log("Vao a")
//         return 3;
//     }
//     return a
// }

// console.log(SumAll)


// object : thuong dung const

// - syntax

const user = {
    // key : value
    name : "ABC",
    age : 20
}

console.log(User.name)
console.log(User.age)

// constructor

function User(nameValue, ageValue) 
{
    // buoc phai dung this
    this.name = nameValue
    this.age = ageValue
}

let user1 = new User("Vo", 20)
console.log(user1.name)
console.log(user1.age)

