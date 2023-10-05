let saldo = 0;

function tambahSaldo() {
    const tambah = parseFloat(window.prompt('Masukkan jumlah saldo yang ingin ditambahkan:'));
    if (!isNaN(tambah)) {
        saldo += tambah;
        alert(`Total Saldo: ${saldo}`);
    } else {
        alert('Masukkan angka yang valid.');
    }
}

function kurangiSaldo() {
    const kurangi = parseFloat(window.prompt('Masukkan jumlah saldo yang ingin dikurangi:'));
    if (!isNaN(kurangi)) {
        if (kurangi <= saldo) {
            saldo -= kurangi;
            alert(`Total Saldo: ${saldo}`);
        } else {
            alert('Saldo tidak mencukupi.');
        }
    } else {
        alert('Masukkan angka yang valid.');
    }
}
