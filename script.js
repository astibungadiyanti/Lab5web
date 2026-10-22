function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function hitungNilai() {
  const inputTugas = document.getElementById("tugas").value;
  const inputUTS = document.getElementById("uts").value;
  const inputUAS = document.getElementById("uas").value;

  const pesan = document.getElementById("pesan");

  if (inputTugas.trim() === "" ||
      inputUTS.trim() === "" ||
      inputUAS.trim() === "") {
    pesan.textContent = "Semua nilai wajib diisi.";
    return;
  }

  const tugas = Number(inputTugas);
  const uts = Number(inputUTS);
  const uas = Number(inputUAS);

  if (tugas < 0 || tugas > 100 ||
      uts < 0 || uts > 100 ||
      uas < 0 || uas > 100) {
    pesan.textContent = "Setiap nilai harus berada pada rentang 0–100.";
    return;
  }

  const akhir = hitungNilaiAkhir(tugas, uts, uas);
  const predikat = tentukanPredikat(akhir);
  const status = akhir >= 60 ? "Lulus" : "Belum lulus";

  document.getElementById("hasilAkhir").textContent =
    "Nilai akhir: " + akhir.toFixed(2);

  document.getElementById("hasilPredikat").textContent =
    "Predikat: " + predikat;

  document.getElementById("hasilStatus").textContent =
    "Status: " + status;

  pesan.textContent = "";
}