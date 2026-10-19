function hitungtotal() {
    let nasi = Number(document.getElementById("nasi").value);
    let kebab = Number(document.getElementById("kebab").value);
    let ayam = Number(document.getElementById("ayam").value);
    let sosis = Number(document.getElementById("sosis").value);
    let mie = Number(document.getElementById("mie").value);

    let total = (nasi * 15000) +
                (kebab * 12000) +
                (ayam * 12000) +
                (sosis * 10000) +
                (mie * 8000);

    let nama = document.getElementById("nama").value;
    let daftar = document.getElementById("daftarPesanan");

    document.getElementById("hasilNama").innerText =
        nama.trim() || "Belum diisi";

    daftar.innerHTML = "";

    let menu = [
        {nama: "Nasi Goreng", jumlah: nasi, harga: 15000},
        {nama: "Kebab", jumlah: kebab, harga: 12000},
        {nama: "Ayam Geprek", jumlah: ayam, harga: 12000},
        {nama: "Sosis Bakar", jumlah: sosis, harga: 10000},
        {nama: "Mie Goreng", jumlah: mie, harga: 8000}
    ];

    let adaPesanan = false;

    menu.forEach(function(item) {
        if (item.jumlah > 0) {
            adaPesanan = true;

            let li = document.createElement("li");

            li.innerText = item.nama + " x " +
                item.jumlah + " - Rp" +
                (item.jumlah * item.harga).toLocaleString("id-ID");

            daftar.appendChild(li);
        }
    });

    if (!adaPesanan) {
        daftar.innerHTML = "<li>Belum ada pesanan</li>";
    }

    document.getElementById("hasil").innerText =
        "Total pesanan: Rp" + total.toLocaleString("id-ID");
}