// string: trim, include
// array: unshift, lastindexof, map, filter
// object: prop as func, new date, date.get...
// DOM: querrySelector
// đặt tên: đặt class viết hoa chữ cái đầu,CamelCase; đặt cho var viết thường chữ đầu, camelCase; đặt tên cho html attribute(VD class hoặc id) hoặc css selector dùng  _
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr2 = []
arr2 = arr.filter(num => num > 1)
console.log(arr2)
arr2 = arr.map(num => num*2)
console.log(arr2)
