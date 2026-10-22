const inputA = prompt("Masukkan bilangan pertama:");
const inputB = prompt("Masukkan bilangan kedua:");

if (
  inputA === null || inputA.trim() === "" ||
  inputB === null || inputB.trim() === "" ||
  Number.isNaN(Number(inputA)) ||
  Number.isNaN(Number(inputB))
) {
  alert("Masukkan dua bilangan yang valid.");
} else {
  const a = Number(inputA);
  const b = Number(inputB);

  function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
  }

  operasiDasar(a, b);
}