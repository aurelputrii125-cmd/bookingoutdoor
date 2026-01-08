function booking() {
  let nama = document.getElementById("nama").value;
  let alat = document.getElementById("alat").value;
  let tanggal = document.getElementById("tanggal").value;

  if (nama === "" || alat === "" || tanggal === "") {
    alert("Harap lengkapi semua data!");
    return;
  }

  document.getElementById("hasil").innerHTML =
    "<b>Booking Berhasil!</b><br>" +
    "Nama: " + nama + "<br>" +
    "Alat: " + alat + "<br>" +
    "Tanggal: " + tanggal;
}
