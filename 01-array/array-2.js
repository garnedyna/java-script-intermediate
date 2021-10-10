// Soal - 02
// Kamu diminta untuk membuat sebuah fungsi yang akan mengembalikan total berapa elemen bilangan/number yang melebihi nilai rata-rata dari sebuah array, fungsi tersebut memiliki spesifikasi sebagai berikut:

// memiliki 1 parameter:
// arr [Array of Number] => array 1 dimensi dengan nilai Number
// return value [Number] total angka yang melebihi nilai rata-rata
// Untuk mempermudah proses pengerjaan kamu dapat menggunakan code template dibawah ini

const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    let sum = 0;
    let counter = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    let avg = sum / arr.length;
    for(let j = 0; j < arr.length; j++){
        if(arr[j] > avg){
            counter++;
        }
    }
    return counter;
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))