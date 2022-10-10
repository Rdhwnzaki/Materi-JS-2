const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol',
    'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

const searchName = (nama, jumlah, callback) => {
    var newArray = name.filter(elemen => elemen.toLowerCase().includes(nama.toLowerCase()))
        .filter((elemen, i) => i < jumlah)
    callback(newArray)
}
searchName('an', 4, data => {
    console.log(data)
})



