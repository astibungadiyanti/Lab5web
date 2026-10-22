# Praktikum JavaScript — Latihan 1: Menampilkan Output Hello World

## Tujuan Praktikum

Tujuan praktikum ini adalah memahami dasar penggunaan JavaScript dalam halaman web. Selain itu, praktikum ini bertujuan mempelajari cara menampilkan informasi pada halaman HTML dan Console browser menggunakan JavaScript.

## Dasar Teori

JavaScript merupakan bahasa pemrograman yang digunakan untuk mengatur perilaku dan interaksi pada halaman web. JavaScript dapat digunakan untuk mengubah isi elemen HTML, menampilkan pesan, melakukan perhitungan, dan membuat halaman web menjadi lebih interaktif.

Pada latihan pertama ini, JavaScript digunakan untuk menampilkan teks Hello World pada halaman HTML menggunakan textContent dan pada Console browser menggunakan console.log().

## Langkah-Langkah Praktikum

1. Membuat folder praktikum dengan nama Lab5Web.

2. Membuat file index.html untuk menyusun struktur halaman web.

3. Membuat file script.js untuk menuliskan perintah JavaScript.

4. Menghubungkan file JavaScript dengan HTML menggunakan elemen script.

5. Menambahkan perintah JavaScript untuk menampilkan teks Hello World pada halaman dan Console.

6. Menyimpan seluruh file yang telah dibuat.

7. Membuka file index.html menggunakan browser.

8. Memeriksa tampilan halaman dan membuka Console melalui menu Inspect atau Periksa pada browser.
## 4. Screenshot
Tambahkan screenshot hasil kalkulator yang sudah dijalankan di browser pada bagian ini.

![Screenshot](Screenshot/Hasil1.png)



# Praktikum JavaScript — Kalkulator

## 1. Tujuan
Membuat aplikasi kalkulator sederhana menggunakan HTML dan JavaScript untuk melakukan operasi aritmatika.

## 2. Langkah-Langkah
1. Membuat file `index.html` sebagai struktur halaman kalkulator.
2. Membuat tampilan kalkulator dengan tombol angka dan operator matematika.
3. Menambahkan JavaScript untuk memproses input dan menghitung hasil.
4. Menguji fungsi penjumlahan, pengurangan, perkalian, dan pembagian.
5. Menjalankan program melalui browser dan memastikan kalkulator berfungsi dengan baik.

## 3. Hasil Praktikum
Kalkulator dapat menerima input angka, melakukan operasi matematika dasar, dan menampilkan hasil perhitungan pada layar.

## 4. Screenshot
Tambahkan screenshot hasil kalkulator yang sudah dijalankan di browser pada bagian ini.

![Screenshot](Screenshot/Hasil.png)

# H. Pertanyaan dan Tugas

## 1. Perbedaan console.log(), alert(), prompt(), dan textContent/innerHTML
- `console.log()` menampilkan informasi di Console.
- `alert()` menampilkan pesan kepada pengguna.
- `prompt()` meminta input dari pengguna.
- `textContent` mengubah teks HTML, sedangkan `innerHTML` mengubah isi HTML termasuk tag.

## 2. Perbedaan let dan const
`let` digunakan untuk variabel yang nilainya dapat diubah, sedangkan `const` tidak dapat ditetapkan ulang.

```javascript
let umur = 18;
umur = 19;
const nama = "Budi";
```

## 3. Perbedaan operator == dan ===
`==` membandingkan nilai dengan kemungkinan konversi tipe data, sedangkan `===` membandingkan nilai dan tipe data.

```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

## 4. Fungsi if–else dan switch
`if–else` digunakan untuk memeriksa kondisi, sedangkan `switch` digunakan untuk memilih tindakan berdasarkan beberapa pilihan nilai.

## 5. Fungsi parameter dan return
Parameter menerima data masukan, sedangkan `return` mengembalikan hasil dari fungsi.

```javascript
function tambah(a, b) {
  return a + b;
}
console.log(tambah(2, 3));
```

## 6. Fungsi document.getElementById()
Digunakan untuk memilih elemen HTML berdasarkan ID agar dapat diubah menggunakan JavaScript.

```javascript
document.getElementById("pesan").textContent = "Halo Dunia";
```

## 7. Script validasi form
Kode HTML:

```html
<form id="form">
  <input type="text" id="nama" placeholder="Nama">
  <input type="number" id="nilai" placeholder="Nilai">
  <button type="submit">Kirim</button>
</form>
<p id="hasil"></p>
<script src="script.js"></script>
```

Kode JavaScript (`script.js`):

```javascript
document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const inputNilai = document.getElementById("nilai").value;
  const nilai = Number(inputNilai);
  const hasil = document.getElementById("hasil");

  if (nama === "" || inputNilai.trim() === "") {
    hasil.textContent = "Semua kolom wajib diisi.";
  } else if (!Number.isFinite(nilai) || nilai < 0 || nilai > 100) {
    hasil.textContent = "Nilai harus antara 0–100.";
  } else {
    hasil.textContent = "Data valid.";
  }
});
```

**Penjelasan:** Program memeriksa apakah nama dan nilai sudah diisi. Nilai harus berupa angka antara 0 sampai 100. Jika semua ketentuan terpenuhi, pesan "Data valid" akan ditampilkan.
