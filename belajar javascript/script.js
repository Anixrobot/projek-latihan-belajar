console.log("Mesin JavaScript berhasil menyala, Bos! Siap menerima logika!");

const teksJudul = document.getElementById("judul");
const teksDeskripsi = document.getElementById("deskripsi");
const tombolSakti = document.getElementById("tombol-aksi");

// ==========================================
// 1. MEMBUAT MEMORI (VARIABEL STATUS)
// Kita pakai 'let' (bukan 'const') karena isi memori ini bakal kita ubah-ubah.
// false = mesin mati, true = mesin nyala.
// ==========================================
let mesinNyala = false; 

tombolSakti.addEventListener("click", function() {

    // ==========================================
    // 2. MASUK KE LOGIKA SAKLAR (IF / ELSE)
    // Tanda '===' artinya JavaScript lagi nanya: "Apakah nilainya bener-bener sama dengan...?"
    // ==========================================

    if (mesinNyala === false) {
        
        // IF: JIKA MESIN SEDANG MATI, MAKA NYALAKAN!
        teksJudul.innerText = "Sistem Berhasil Aktif! 🔥";
        teksDeskripsi.innerText = "Mesin sekarang dalam keadaan MENYALA.";
        teksDeskripsi.style.color = "#00ffcc";

        tombolSakti.innerText = "Matikan Mesin 🛑";
        tombolSakti.style.backgroundColor = "#e63946"; // Tombol jadi merah
        
        // PENTING: Update memorinya biar tombol tau sekarang mesin udah nyala!
        mesinNyala = true; 

    } else {
        
        // ELSE: SEBALIKNYA (JIKA MESIN SUDAH NYALA), MAKA MATIKAN!
        teksJudul.innerText = "Sistem Belum Aktif";
        teksDeskripsi.innerText = "Menunggu perintah pertama dari tombol...";
        teksDeskripsi.style.color = "white"; // Balikin teks deskripsi ke warna putih

        tombolSakti.innerText = "Nyalakan Mesin!! 🚀";
        tombolSakti.style.backgroundColor = "#00ffcc"; // Balikin tombol ke warna cyan
        
        // PENTING: Update memorinya biar tombol tau sekarang mesin mati lagi!
        mesinNyala = false;
        
    }
    
});