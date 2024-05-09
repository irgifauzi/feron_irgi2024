import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = " https://uts-irgi2024-039e21e70d31.herokuapp.com/yeseuy";
get(urlAPI,isiTablePemain);
function isiTablePemain(results){
    console.log(results);
}