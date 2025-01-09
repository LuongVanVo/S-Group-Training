// BT3: Kiểm tra xem một số nguyên đã cho có chuỗi chữ số tăng không
function BT3(a)
{
    let str = String(a)
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