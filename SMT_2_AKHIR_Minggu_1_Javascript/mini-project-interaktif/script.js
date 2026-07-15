// Input nama
let nama = prompt("Masukkan nama:");

// Input umur
let umur = Number(prompt("Masukkan umur:"));

// Percabangan
if (umur >= 17) {
  alert("Halo " + nama + ", Anda Dewasa.");
} else {
  alert("Halo " + nama + ", Anda Belum Dewasa.");
}

// Menampilkan hasil di Console
console.log("Nama:", nama);
console.log("Umur:", umur);
