b = '13.5'
c = 1
console.log(b - c)
console.error("Hello") // in ra màu lỗi màu đỏ
console.warn('xin chào') // in ra cảnh báo màu vàng

c = 'A13'
d = 24
console.log(c - d) // NaN - NOT a NUMBER
// c -> NaN , d = 24 => c - d = NaN - 24 = NaNe

var x = null
console.log(x)
var y
console.log(y)

if (x == y) {
    console.log("True")
} 
if (x === y) {
    console.log("True")
} else {
    console.log("False")
}

arr = [1, 2, 3, 4]
console.log(arr)

o = {
    name : 'Truyen',
    age : 22,
    skills  : ['JS', 'HTML', 'CSS'],
    'queQuan' : 'Quang Tri'
}

console.log(o)
console.log(o.name)
console.log(o['name'])
console.log(o.queQuan)

// Ép kiểu

console.log(2 == '2')
console.log(2 === '2')
console.log(13 > '20')

var h = 10
console.log(h++)
console.log(++h)

// switch 