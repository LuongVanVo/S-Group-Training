// BT3: Kiểm tra xem một số nguyên đã cho có chuỗi chữ số tăng không
function BT3(a)
{
    let str = a.toString();
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[j] < str[i]) {
                return false
            }
        }
    }
    return true
}

console.log("Bài tập 3")
console.log(BT3(1234569))

// BT6: Viết chương trình hiển thị số xuất hiện nhiều lần nhất trong mảng
function BT6(arr) {
    const tmp = new Array(arr.length).fill(1)
   for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            tmp[i]++;
        }
    }
}
    let max = Math.max(...tmp)
    let res = tmp.indexOf(max);
    return arr[res];
}

console.log("Bài tập 6")
const arr = [1, 2, 1, 2, 3, 4, 5, 3, 3, 3, 5, 5, 5, 5, 5, 5]
console.log(BT6(arr))

// mang danh dau
function BT6_1(arr) {
    let kichThuocMang = Math.max(...arr)
    const tmp = new Array(kichThuocMang + 1).fill(1)
    for (let i = 0; i < arr.length; i++) {
        tmp[arr[i]] = tmp[arr[i]] + 1
    }
    
    let maxCount = Math.max(...tmp)
    let res = tmp.indexOf(maxCount)
    return res
}

console.log("Bài tập 6")
const arr1 = [1, 2, 1, 2, 3, 4, 5, 3, 3, 3, 5, 5, 5, 5, 5, 5]
console.log(BT6_1(arr1))

// BT7: Kiểm tra xem chuỗi có chứa 'java' hay không
function BT7(str)
{
    return str.includes('java')
}
console.log("Bài tập 7")
inp = 'javascript'
inp2 = 'dfhklashfadsfhfas'
console.log(BT7(inp))
console.log(BT7(inp2))


// BT9: Nhập 1 chuỗi và tìm từ dài nhất trong chuỗi
function BT9(str)
{
    let subStr = str.split(' ')
    let max = 0
    let res
    for (let i = 0; i < subStr.length; i++) {
        if (subStr[i].length > max) {
            max = subStr[i].length
            res = subStr[i]
        }
    }
    return res;
}

console.log("Bài tập 9")
inp3 = 'Luong Vannnnnnnnnnnnnnnn Vo'
console.log(BT9(inp3))


//Bài 1: Viết chương trình hiển thị ngày giờ
console.log("Bài tập 1");

const date = new Date()
// console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear())

function showDate()
{
    const date = new Date()
    // console.log(date.toLocaleTimeString() + ' ' + date.toLocaleDateString())
    const hour = date.getHours()
    const minute = date.getMinutes()
    const seconds = date.getSeconds()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    return `${hour}:${minute}:${seconds < 10 ? '0' + seconds.toString() : seconds} ${day}/${month + 1}/${year}`
}
console.log(showDate())

// Bài 2: In ra ngày tháng năm theo các định dạng mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy
console.log("Bài tập 2");

const date_1 = new Date()
// mm-dd-yyyy
if ((date_1.getMonth() + 1) < 10 && date_1.getDate() < 10) {
    console.log('0' + (date_1.getMonth() + 1) + '-0' + date_1.getDate() + '-' + date_1.getFullYear());
} else if ((date_1.getMonth() + 1) < 10) {
    console.log('0' + (date_1.getMonth() + 1) + '-' + date_1.getDate() + '-' + date_1.getFullYear());
} else if (date_1.getDate() < 10) {
    console.log((date_1.getMonth() + 1) + '-0' + date_1.getDate() + '-' + date_1.getFullYear());
} else {
    console.log((date_1.getMonth() + 1) + '-' + date_1.getDate() + '-' + date_1.getFullYear());
}

// mm/dd/yyyy
if ((date_1.getMonth() + 1) < 10 && date_1.getDate() < 10) {
    console.log('0' + (date_1.getMonth() + 1) + '/0' + date_1.getDate() + '/' + date_1.getFullYear());
} else if ((date_1.getMonth() + 1) < 10) {
    console.log('0' + (date_1.getMonth() + 1) + '/' + date_1.getDate() + '/' + date_1.getFullYear());
} else if (date_1.getDate() < 10) {
    console.log((date_1.getMonth() + 1) + '/0' + date_1.getDate() + '/' + date_1.getFullYear());
} else {
    console.log((date_1.getMonth() + 1) + '/' + date_1.getDate() + '/' + date_1.getFullYear());
}

// dd-mm-yyyy
if ((date_1.getMonth() + 1) < 10 && date_1.getDate() < 10) {
    console.log('0' + date_1.getDate() + '-0' + (date_1.getMonth() + 1) + '-' + date_1.getFullYear());
} else if ((date_1.getMonth() + 1) < 10) {
    console.log(date_1.getDate() + '-0' + (date_1.getMonth() + 1) + '-' + date_1.getFullYear());
} else if (date_1.getDate() < 10) {
    console.log('0' + date_1.getDate() + '-' + (date_1.getMonth() + 1) + '-' + date_1.getFullYear());
} else {
    console.log(date_1.getDate() + '-' + (date_1.getMonth() + 1) + '-' + date_1.getFullYear());
}

// Bài 8: Viết một hàm để lấy tên tháng từ một số cụ thể (ví dụ: 1 - Tháng một)
console.log("Bài tập 8");

function numberToMonth(a)
{
        const nameMonth = ["Tháng một", "Tháng hai", "Tháng ba" , "Tháng bốn", "Tháng năm", "Tháng sáu", "Tháng bảy", "Tháng tám", "Tháng chín", "Tháng mười", "Tháng mười một", "Tháng mười hai"]
        for (let i = 0; i < nameMonth.length; i++) {
            if (a == i + 1) {
                return nameMonth[i]
            }
        }
}

console.log(numberToMonth(-1))
console.log(numberToMonth(1))
console.log(numberToMonth(2))
console.log(numberToMonth(6))
console.log(numberToMonth(11))
console.log(numberToMonth(12))
console.log(numberToMonth(13))

// dung object
function showMonth()
{
    const months = {
        0: 'Tháng 1',
        1: 'Tháng 2',
        2: 'Tháng 3',
        3: 'Tháng 4',
        4: 'Tháng 5',
        5: 'Tháng 6',
        6: 'Tháng 7',
        7: 'Tháng 8',
        8: 'Tháng 9',
        9: 'Tháng 10',
        10: 'Tháng 11',
        11: 'Tháng 12'
    }

    const date = new Date()
    const monthIndex = date.getMonth()

    console.log(
        months[monthIndex]
    )
}

// Bài tập 4: Thay thế mọi ký tự trong một chuỗi đã cho với ký tự theo sau nó trong bảng chữ cái
console.log("Bài tập 4");

function bai4(s)
{
    let res = ''
    for (let i = 0; i < s.length; i++) {
        // fromCharCode - chuyển mã ASCII sang ký tự
        // charCodeAt = lấy mã ASCII của ký tự
        res += String.fromCharCode(s.charCodeAt(i) + 1)
    }
    return res
}

console.log(bai4('abc'))
console.log(bai4('efh'))

// Bài tập 5: viết chương trình để tạo chuỗi bằng cách sử dụng ba ký tự của một chuỗi có độ dài lẻ. Độ dài chuỗi phải lớn hơn hoặc bằng 3.
console.log("Bài tập 5");

function bai5(s)
{
    let n = Math.floor(s.length / 2)
    return s.slice(n - 1, n + 2) // lấy các ký tự từ vị trí n - 1 đến n + 2
}

console.log(bai5('abcde'))