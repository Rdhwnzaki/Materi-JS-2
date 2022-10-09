const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol',
    'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

const searchName = (nama) => {
    var newName = name
    newName.forEach(
        function a(array) {
            let lowArr = array.toLowerCase()
            let regex = nama.toLowerCase()
            let result = lowArr.match(regex)
            let output = [result]
            console.log(output)
        }
    )

}
searchName('an')



