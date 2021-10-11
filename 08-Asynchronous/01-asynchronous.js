// Soal - 01
// Buatlah file 01-asynchronous.js dan copy template soal di bawah. Lalu berikan jawaban sesuai nomor soal yang disediakan.
// Kamu diminta untuk melakukan analisa sederhana mengenai
// 1. Apa itu synchronous?
// 2. Apa itu asynchronous?
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa

// Answered
// 1. Synchronous adalah proses pengeksekusian kode yang dijalankan secara berurutan.
// 2. Asyncrhonous adalah proses pengeksekusian kode yang tidak sesuai dengan urutan dan dapat menjalankan perintah selanjutnya tanpa menunggu perintah sebelumnya selesai.
// 3. dapat karena browser memerlukan waktu untuk melakukan request sehingga agar tidak terjadi blocking pada UI, prosess asyncronus akan tetap berjalan pada background thread.Answered
// 4. 
// first log:  1
// first log:  2
// first log:  3
// first log:  4
// first log:  5
// second log:  6
// second log:  6
// second log:  6
// second log:  6
// second log:  6
// 5. fungsi yang dideklarasikan dalam loop yang merujuk pada variabel lingkup luar yang dapat menyebabkan semantik yang membingungkan. Jadi, seharusnya menggunakan let
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (let i = 1; i<=5; i++) {
  console.log("first log: ", i); // 01 - Pertama
  setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}

