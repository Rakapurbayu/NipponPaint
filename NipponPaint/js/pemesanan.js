function submitForm() {
    var jumlah = document.getElementById("jumlah").value;
    var nama = document.getElementById("nama").value;
    var alamat = document.getElementById("alamat").value;
    var email = document.getElementById("email").value;
    var pesanan = document.getElementById("pesanan").value;

    var pemesanan = {
        "Jumlah": jumlah,
        "Nama": nama,
        "Alamat": alamat,
        "Email": email,
        "Pesanan": pesanan
    };

    var pemesananList = JSON.parse(localStorage.getItem("pemesananList")) || [];
    pemesananList.push(pemesanan);
    localStorage.setItem("pemesananList", JSON.stringify(pemesananList));

    displayData();

    document.getElementById("dataHeading").style.display = "block";
    document.getElementById("pemesananTable").style.display = "block";
}

function displayData() {
    var pemesananList = JSON.parse(localStorage.getItem("pemesananList")) || [];
    var table = document.getElementById("pemesananTable");
    table.innerHTML = "";

    var headerRow = table.insertRow(0);
    for (var key in pemesananList[0]) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(key));
        headerRow.appendChild(th);
    }

    for (var i = 0; i < pemesananList.length; i++) {
        var row = table.insertRow(i + 1);
        for (var key in pemesananList[i]) {
            var cell = row.insertCell();
            cell.appendChild(document.createTextNode(pemesananList[i][key]));
        }
    }
}