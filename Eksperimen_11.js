function ubahTampilan() {
  const teks = document.getElementById("teks");
  const tombol = document.getElementById("tombol");

  if (teks.style.display === "none") {
    teks.style.display = "block";
    tombol.textContent = "Sembunyikan Teks";
  } else {
    teks.style.display = "none";
    tombol.textContent = "Tampilkan Teks";
  }
}