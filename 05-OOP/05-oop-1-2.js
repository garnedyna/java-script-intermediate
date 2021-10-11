// / Soal - 01
// Kalian diminta untuk melakukan sebuah analisis sederhana terhadap sebuah baris kode

// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
const obj = {
  fun1: function() {
    console.log("fun1", this);
  },
  fun2: () => {
    console.log("fun2", this);
  }
};

obj.fun1();
obj.fun2();

// answered
// 1. akan menghasilkan output :
// fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
//fun2 {}
// 2. tidak
// 3. karena function atau method pada fun2 tidak dideklarasikan dengan benar, sehingga outputnya hanya {}

// Soal - 02
// Kalian diminta untuk membuat sebuah analisa terhadap beberapa pertanyaan dibawah:

// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?

// Answered
// 1. Encapsulation adalah cara untuk membatasi akses langsung ke properti atau method dari sebuah objek. Encapsulation dibutuhkan karena terdapat fitur information-hiding mechanism yang dapat menghilangkan akses publik ke atribut-atribut yang terdapat di dalam “kapsul” tersebut sehinggan dapat memudahkan dalam mendefinisikan atribut apa saja yang dapat dibaca dan diperbarui.
// 2. Abstraction adalah teknik untuk menyembunyikan detail tertentu dari sebuah objek/method dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut. Abstraction dibutuhkan karena memiliki informasi dan metode yang dapat diturunkan ke subclassnya, dan seluruh subclass akan mengikuti apa saja metode yang akan diturunkan oleh Abstract Class.
// 3. Inheritance adalah sebuah proses dimana sebuah class mewariskan property dan methodnya ke class lain atau childnya. Inheritance dibutuhkan karena  inheritance dibutuhkan ketika kita ingin mengambil objek dan method yang ada di class parent dan tidak perlu membuat objek dan method yang sama di class child nya
// 4. Polymorpishm adalah kemampuan dari suatu objek untuk memiliki banyak bentuk. Polymorpishm dibutuhkan karena dapat melakukan suatu tindakan yang mungkin secara prinsip sama tetapi secara proses berbeda.
