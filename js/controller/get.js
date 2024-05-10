import { addInner } from "https://bukulapak.github.io/element/process.js";
import { isiTabel } from "../temp/table.js";

export function isiTablePresensi(results) {
    clearTable();
    results.forEach(isiRow);
}

function isiRow(value){
    let content = 
    isiTabel.replace("#Id#", value._id)
            .replace("#Nama#", value.nama)
            .replace("#Posisi#", value.posisi)
            .replace("#Tinggi#", value.tinggi)
            .replace("#Berat#", value.berat)
            .replace("#Tanggal Lahir#", value.tanggal_lahir)
            .replace("#Negara#", value.negara)
            .replace("#No Punggung#", value.no_punggung );
            
            const tableBody = document.querySelector('#iniTabel tbody');
            if (tableBody) {
              
                let newRow = document.createElement('tr');
                newRow.innerHTML = content; 
                tableBody.appendChild(newRow); 
            }
        }
        
        function clearTable() {
            const tableBody = document.querySelector('#iniTabel tbody');
            if (tableBody) {
                tableBody.innerHTML = ''; 
            }
        }