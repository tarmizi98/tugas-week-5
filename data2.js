function validasi(formNama, formUmur, formUang) {
  if (formNama.length < 10) {
    // alert("Minimal 10 karakter")
    return [false, "Minimal 10 karakter"];
  }
  if (formUmur < 25) {
    // alert("Minimal umur 25 tahun")
    return [false, "Minimal umur 25 tahun"];
  }
  if (formUang < 100000 || formUang > 1000000) {
    // alert("Uang saku harus diantara 100rb hingga 1jt")
    return [false, "Uang saku harus diantara 100rb hingga 1jt"];
  }

  return [true, null];
}

function masukkanData(formNama, formUmur, formUang) {
  const tabel = document.querySelector("#tabel > tbody");
  const baris = document.createElement("tr");

  // th
  const thNama = document.createElement("td");
  thNama.textContent = formNama;
  const thUmur = document.createElement("td");
  thUmur.textContent = formUmur;
  const thUang = document.createElement("td");
  thUang.textContent = formUang;
  thUmur.setAttribute("id", "tabelumur");
  thUang.setAttribute("id", "tabeluang");

  // masukkin data nama ke baris
  baris.appendChild(thNama);
  baris.appendChild(thUmur);
  baris.appendChild(thUang);

  // masukkin baris ke tabel
  tabel.appendChild(baris);

  const tabelumur = document.querySelectorAll("#tabel td#tabelumur");
  console.log(tabelumur);
  let jumlahUmur = 0;
  for (let i = 0; i < tabelumur.length; i++) {
    jumlahUmur += +tabelumur[i].innerText;
  }

  let rataRataUmur = Math.trunc(jumlahUmur / tabelumur.length);
  let idumur = document.getElementById("idumur");
  idumur.textContent = `Rata - rata Umur Adalah : ${rataRataUmur}`;

  const tabeluang = document.querySelectorAll("#tabel td#tabeluang");
  console.log(tabeluang);
  let jumlahUang = 0;
  for (let i = 0; i < tabeluang.length; i++) {
    jumlahUang += +tabeluang[i].innerText;
  }

  let rataRataUang = Math.trunc(jumlahUang / tabeluang.length);
  let iduang = document.getElementById("iduang");
  iduang.textContent = `Rata rata Uang Adalah : ${rataRataUang}`;
}

function handleSubmit(event) {
  event.preventDefault();
  let formNama = document.getElementById("nama").value;
  let formUmur = document.getElementById("umur").value;
  let formUang = document.getElementById("uang").value;
  let [nilaivalidasi, pesan] = validasi(formNama, formUmur, formUang);

  const datasalah = new bootstrap.Modal("#popup");
  let salahnama = document.getElementById("salahnama");

  if (nilaivalidasi) {
    setTimeout(() => {
      salahnama.textContent = `Data Berhail Di Submit`;
      datasalah.show();
      masukkanData(formNama, formUmur, formUang);
    }, 2000);
    // isi data tabel
  } else {
    salahnama.textContent = pesan;
    datasalah.show();
  }

  // tabel
}

document.getElementById("isiData").addEventListener("submit", handleSubmit);
