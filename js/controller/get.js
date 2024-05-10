import { isiTabel } from "../temp/table.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";

export function isiTablePresensi(results) {
    clearTable();
    results.forEach(isiRow);
}

function isiRow(value){
    let content = 
    isiTabel.replace('<div class="text-transparent h-2 animate-pulse bg-slate-200 rounded col-span-2">#ID#</div>', value.id)
            .replace('<div class="text-transparent h-2 animate-pulse bg-slate-200 rounded col-span-2">#Nama Pemain#</div>', value.nama)
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
    const tableBody = document.querySelector('#isiTabel tbody');
    if (tableBody) {
        tableBody.innerHTML = '';
    }
}