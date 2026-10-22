function cekNilai () {
    let nilai = Number(document.getElementById("Nilai").value);
    let grade;
      if (nilai >=90) {
        grade ="A";
    } else if (nilai >=80) {
        grade ="B"
    } else if (nilai >=70) {
        grade ="C"
    } else {
        grade ="D";
    }

    document.getElementById("hasil").innerHTML = "Nilai kamu:" + grade;

    const hasil = document.getElementById("hasil");
    let input = document.getElementById("nilai").value;
    let Nilai = Number(input);

    if (input === "" || nilai <0 || nilai > 100) {
        hasil.innerHTML = "Masukkan niali antara 0 sampai 100!";
        return;
    }
}