import { isiTabel } from "../temp/table.js";

// Import fungsi clearTable jika diperlukan

export function isiTablePresensi(results) {
    clearTable(); // Panggil fungsi clearTable sebelum mengisi kembali tabel
    results.forEach(isiRow);
}

function isiRow(value){
    let content = 
    isiTabel.replace("#ID#", value._id)
            .replace("#Nama Pemain#", value.nama)
            .replace("#Posisi#", value.posisi)
            .replace("#Tinggi#", value.tinggi)
            .replace("#Berat#", value.berat)
            .replace("#Tanggal Lahir#", value.tanggal_lahir)
            .replace("#Negara#", value.negara)
            .replace("#No Punggung#", value.no_punggung );
    const tableBody = document.querySelector('#iniTabel tbody');
    addInner("iniTabel", content);
}
function clearTable() {
    const tableBody = document.querySelector('#iniTabel tbody');
    tableBody.innerHTML = ''; // Menghapus semua isi dari elemen tbody
}
