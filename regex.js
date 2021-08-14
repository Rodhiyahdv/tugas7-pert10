// Soal No.1
// Buat sebuah program untuk mengecek apakah karakter pertama dalam sebuah string mengandung huruf besar atau tidak
// a. Jika huruf pertama adalah huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf besar’
// b. Jika huruf pertama bukan huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf kecil’

// Jawaban
let a = document.getElementById("input-kata");
let b = document.getElementById("jawaban1");

const cekKata = () => {
    if (a.value == "") {
        alert("Masukkan kata/kalimat terlebih dahulu");
        a.focus();
    }
    else {
        cekHuruf(a.value);
    }
}

const cekHuruf = (a) => {
    let kata = /^[A-Z]/.test(a);

    if (kata === true) {
        console.log ('Huruf pertama adalah huruf besar');
        b.innerHTML = "Huruf pertama adalah huruf besar";
    }
    else {
        console.log ('Huruf pertama adalah huruf kecil');
        b.innerHTML = "Huruf pertama adalah huruf kecil";
    }

}

// Soal No.2
// Buat sebuah program untuk memvalidasi format nomor handphone
// Nomor handphone minimum 10 digit dan maksimum 12 digit
// Hanya menerima digit number

// Jawaban
let telp = document.getElementById("input-telp");
let hsl = document.getElementById("jawaban2");

const cekInput = () => {
    if (telp.value == "") {
        alert("Nomor handphone tidak boleh kosong")
        telp.focus();
    }
    else {
        cekTelp(telp.value);
    }
}

const cekTelp = () => {
    let angka = /^[0-9]{10,12}$/;
    let nomor = telp.value.match(angka);

    if (nomor) {
        let record = telp.value;
        console.log ('Nomor handphone anda adalah : '+ record);
        hsl.innerHTML = "Nomor handphone anda adalah : "+ record;
    }
    else {
        console.log ('Nomor handphone minimum 10 digit dan maksimal 12 digit');
        hsl.innerHTML = "Nomor handphone minimum 10 digit dan maksimal 12 digit";
    }
    
}


// Soal No.3
// Buat sebuah program yang menyediakan kalimat berikut sehingga user mendapatkan pencarian yang persis sama
// Bagaimana cara memulai usaha bisnis
// Bootcamp impact byte
// Status covid hari ini

// Jawaban
let kalimat = document.getElementById("input-kalimat");
let hasil = document.getElementById("jawaban3");

const cekKalimat = () => {
    if (kalimat.value == "") {
        alert("Masukkan kalimat pada kolom yang disediakan")
        kalimat.focus();
    }
    else {
        cekHasilKalimat(kalimat.value);
    }
}

const cekHasilKalimat = () => {
    let cari = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/;
    let cek = cari.test(kalimat.value);

    if (cek === true) {
        let recordKalimat = kalimat.value;
        console.log ('Jawaban Benar. Kalimat yang anda masukkan adalah : '+ recordKalimat);
        hasil.innerHTML = "Jawaban Benar. Kalimat yang anda masukkan adalah: "+ recordKalimat;
    }
    else {
        console.log ('Jawaban Salah. Kalimat tidak sesuai');
        hasil.innerHTML = "Jawaban Salah. Kalimat tidak sesuai";
    }
    
}

// Soal No.4
// Buat tampilan untuk seluruh soal diatas. Buat sekreatif teman-teman. 1 soal = 1 fitur = 1 page