
const form = document.getElementById("formMahasiswa");
const nama = document.getElementById("nama");
const nim = document.getElementById("nim");
const pesan = document.getElementById("pesan");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (nama.value.trim() === "" || nim.value.trim() === "") {
    pesan.textContent = "Nama dan NIM tidak boleh kosong!";
  } else {
    pesan.textContent = "Data berhasil dikirim!";
  }
});