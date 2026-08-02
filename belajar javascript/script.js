console.log("Mesin JavaScript berhasil menyala, Bos! Siap menerima logika!");

const teksJudul = document.getElementById("judul");
const teksDeskripsi = document.getElementById("deskripsi");


const tombolSakti = document.getElementById("tombol-aksi"); 

tombolSakti.addEventListener("click", function() {

    teksJudul.innerText = "Selamat datang di dunia JavaScript, Bos!";
    teksDeskripsi.innerText = "Selamat Datang di lab Java script";
    
    teksDeskripsi.style.color = "#00ffcc";

    tombolSakti.innerText = "Mesin Menyala!!";
    tombolSakti.style.backgroundColor = "#e63946";
    
    
    tombolSakti.style.cursor = "not-allowed"; 
    
});