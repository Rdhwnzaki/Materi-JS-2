/*Push
Method push digunakan untuk menambah satu atau lebih data baru di akhir sebuah array*/

const contohPush = [10, 20]
contohPush.push(30)
console.log(contohPush)

/*Pop
Method pop digunakan untuk menghapus item terakhir dari sebuah array */

const contohPop = [2, 3, 4]
contohPop.pop()
console.log(contohPop)

/*Unshift
Method unshift digunakan untuk menambah elemen baru di awal sebuah array */

const contohUnshift = ['senang', 'belajar', 'javascript']
contohUnshift.unshift('Saya')
console.log(contohUnshift)

/*Shift
Method shift digunakan untuk menghapus elemen pertama dari sebuah array */

const contohShift = ['Saya', 'senang', 'belajar', 'javascript']
contohShift.shift()
console.log(contohShift)

/*Sort
Method sort digunakan untuk mengurutkan item dalam sebuah array */

var contohSort = [40, 5, 30, 70, 6]
contohSort.sort(function (a, b) { return a - b })
console.log(contohSort)

/*Concat
Method concat digunakan untuk menggabungkan 2 array atau lebih */

const array1 = ['apel', 'pepaya', 'mangga']
const array2 = ['salak', 'alpukat']
const array3 = ['leci']
const contohConcat = array1.concat(array2, array3)
console.log(contohConcat)

/*Slice
Method slice digunakan untuk memilih satu atau beberapa item dari sebuah array */

const contohSlice = ['apel', 'pisang', 'semangka', 'mangga']
const contohSliceBaru = contohSlice.slice(0, 2)
console.log(contohSliceBaru)

/*Filter
Method filter digunakan untuk melakukan filter data dengan kondisi tertentu pada elemen array yang sudah ada */

let data = [2, 1, 3, 4, 6, 5, 8, 9, 12, 15]
let contohFilter = data.filter(elemen => elemen >= 10)
console.log(contohFilter)

/*Includes
Method includes digunakan untuk mengecek apakah sebuah array memiliki elemen tertentu */

let buah = ['apel', 'mangga', 'leci', 'anggur']
let contohIncludes = buah.includes('leci')
console.log(contohIncludes)

/*Splice
Method splice digunakan untuk menambah, menghapus atau mengganti elemen dari sebuah array */

// Contoh hapus
var hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']
hari.splice(0, 3)
console.log(hari)

// //contoh tambah
// // var hari = ['senin', 'selasa', 'jumat', 'sabtu', 'minggu']
// // hari.splice(2, 0, 'rabu', 'kamis')
// // console.log(hari)

// // //Contoh ganti
// var hari = ['rabu', 'jumat', 'sabtu']
// hari.splice(0, 1, 'kamis')
// console.log(hari)