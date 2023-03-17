// import sum from "./penjumlahan.js"

const { sum1 } = require('./penjumlahan')
const { minus1 } = require('./pengurangan')
const { kali1 } = require('./perkalian')
const { bagi1 } = require('./pembagian')

// console.log(minus2(4, 2));

/**
 * TODO: bikin 5 func:
 * 1. hasil tambah inputan user
 * 2. hasil kurang inputan user
 * 3. hasil kali inputan user
 * 4. hasil bagi inputan user
 * 5. hasil total harga kali kuantitas barang, Harga barang dan quantity barang, anggap aja mesin kasir
 */

const readLine = () => {
  const readline = require('readline');

  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

// 1. hasil tambah inputan user
const jumlah = () => {
  const rl = readLine()
  console.log("Penjumlahan");

  rl.question('Angka pertama? ', (angka1) => {
    rl.question('Angka kedua? ', (angka2) => {
      const hasil = sum1(parseInt(angka1), parseInt(angka2))
      console.log(hasil);

      rl.close();
    });
  });
}

// 2. hasil kurang inputan user
const kurang = () => {
  const rl = readLine()
  console.log("Pengurangan");

  rl.question('Angka pertama? ', (angka1) => {
    rl.question('Angka kedua? ', (angka2) => {
      const hasil = minus1(parseInt(angka1), parseInt(angka2))
      console.log(hasil);

      rl.close();
    });
  });
}

// 3. hasil kali inputan user
const kali = () => {
  const rl = readLine()
  console.log("Perkalian");

  rl.question('Angka pertama? ', (angka1) => {
    rl.question('Angka kedua? ', (angka2) => {
      const hasil = kali1(parseInt(angka1), parseInt(angka2))
      console.log(hasil);

      rl.close();
    });
  });
}

// 4. hasil bagi inputan user
const bagi = () => {
  const rl = readLine()
  console.log("Pembagian");

  rl.question('Angka pertama? ', (angka1) => {
    rl.question('Angka kedua? ', (angka2) => {
      const hasil = bagi1(parseInt(angka1), parseInt(angka2))
      console.log(hasil);

      rl.close();
    });
  });
}

// 5. hasil total harga kali kuantitas barang, Harga barang dan quantity barang, anggap aja mesin kasir
const total = () => {
  const rl = readLine()
  console.log("Total harga");

  rl.question('Berapa harganya? ', (price) => {
    rl.question('Berapa kuantitasnya? ', (quantity) => {
      const hasil = kali1(parseInt(price), parseInt(quantity))
      console.log(hasil);

      rl.close();
    });
  });
}

// Pemanggilan function
// jumlah()
// kurang()
// kali()
// bagi()
// total()