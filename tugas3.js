const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    let filter = dataArray.filter(elemen => elemen > nilaiAwal && elemen < nilaiAkhir)
    if (nilaiAkhir < nilaiAwal) {
        console.log('Nilai akhir harus lebih besar dari nilai awal')
    } else if (filter.length == 0) {
        console.log('Nilai tidak ditemukan')
    }
    else if (nilaiAwal < nilaiAkhir && dataArray[0, 1, 2, 3, 4]) {
        console.log(filter)
    } else if (dataArray != [0, 1, 2, 3, 4]) {
        console.log('Jumlah angka dalam dataArray harus lebih dari 5')
    }
}
seleksiNilai(3, 5, [1, 2, 3, 5, 6, 4])