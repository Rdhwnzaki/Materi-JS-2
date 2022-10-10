const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    let filter = dataArray.filter(elemen => elemen > nilaiAwal && elemen < nilaiAkhir)
    if (nilaiAkhir < nilaiAwal) {
        console.log('Nilai akhir harus lebih besar dari nilai awal')
    } else if (filter.length == 0) {
        console.log('Nilai tidak ditemukan')
    }
    else if (nilaiAwal < nilaiAkhir && dataArray.length >= 5) {
        console.log(filter)
    } else if (dataArray.length < 5) {
        console.log('Jumlah angka dalam dataArray harus lebih dari 5')
    }
}
seleksiNilai(3, 5, [2, 3, 4, 5, 6])