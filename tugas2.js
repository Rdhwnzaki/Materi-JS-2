const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol',
    'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

const searchName = (nama, jumlah, callback) => {
    name.forEach(function (array) {
        var lowArr = array.toLowerCase()
        var regex = nama.toLowerCase()
        var result = lowArr.match(regex)
        var output = [result, result.index, result.input]
        console.log(output)
    }
    )
}
searchName('an')



