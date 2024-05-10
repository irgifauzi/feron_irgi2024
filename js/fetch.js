import { get } from "https://bukulapak.github.io/api/process.js"; 
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { isiTabel } from "./table.js";
let urlAPI = " https://uts-irgi2024-039e21e70d31.herokuapp.com/yeseuy";
get(urlAPI,isiTablePemain);
function isiTablePemain(results){
    console.log(results);
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
        addInner("iniTabel", content);
}