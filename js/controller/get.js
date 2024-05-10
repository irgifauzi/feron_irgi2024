import { isiTabel } from "../temp/table.js";

export function isiTablePresensi(results) {
    clearTable();
    results.forEach(isiRow);
}

function isiRow(value){
    let content = 
    isiTabel.replace("#ID#", value._id)
            .replace("#Nama Pemain#", value.Nama_Pemain)
            .replace("#Posisi#", value.posisi)
            .replace("#Tinggi#", value.tinggi)
            .replace("#Berat#", value.berat)
            .replace("#Tanggal Lahir#", value.tanggal_lahir)
            .replace("#Negara#", value.negara)
            .replace("#No Punggung#", value.no_punggung );
            const tableBody = document.querySelector('#iniTabel tbody');
            if (tableBody) {
                // Create a new row element
                let newRow = document.createElement('tr');
                newRow.innerHTML = content; // Set content to the new row
                tableBody.appendChild(newRow); // Append the new row to the tbody
            }
        }
        function clearTable() {
            const tableBody = document.querySelector('#iniTabel tbody');
            if (tableBody) {
                tableBody.innerHTML = ''; // Clear the inner HTML of the tbody
            }
        }