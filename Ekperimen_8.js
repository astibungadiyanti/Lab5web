function cekGenap(angka) {
  return angka % 2 === 0;
}

console.log("Apakah 4 genap?", cekGenap(4));
console.log("Apakah 7 genap?", cekGenap(7));
console.log("Apakah 0 genap?", cekGenap(0));