console.log("Mesin JavaScript berhasil menyala, Bos! Siap menerima logika!");

const teksJudul = document.getElementById("judul");
const teksDeskripsi = document.getElementById("deskripsi");
const tombolSakti = document.getElementById("tombol-aksi");

let mesinNyala =false;

tombolSakti.addEventListener("click", function() {
    

    if (mesinNyala == false) {
        teksJudul.innerText = "sistem Berhasil Aktif🔥";
        teksDeskripsi.innerText = "Mesin Sekarang dalam ke adaan Menyala";
        teksDeskripsi.style.color = "#00ffcc";

        tombolSakti.innerText = "Matikan Mesin🔴";
        tombolSakti.style.backgroundColor = "#e63946";

        mesinNyala = true;

    } else {
        teksJudul.innerText = "Sistem Belum Aktif";
        teksDeskripsi.innerText = "Menunggu perintah pertama dari tombol...";
        teksDeskripsi.style.color = "white";

        tombolSakti.innerText = "Nyalakan Mesin!! 🚀";
        tombolSakti.style.backgroundColor = "#00ffcc"; 
        
        
        mesinNyala = false;
    }


})