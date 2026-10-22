function pilihMenu() {
  const pilihan = prompt("Pilih menu (1, 2, atau 3):");
  let hasil = "";

  switch (pilihan) {
    case "1":
      hasil = "Nasi Goreng - Rp15.000";
      break;
    case "2":
      hasil = "Mie Goreng - Rp12.000";
      break;
    case "3":
      hasil = "Ayam Geprek - Rp18.000";
      break;
    default:
      hasil = "Pilihan menu tidak tersedia.";
  }

  document.getElementById("hasil").textContent = hasil;
}