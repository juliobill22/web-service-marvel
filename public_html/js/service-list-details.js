function listDetais(resourceURI) {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            for (i in myObj.data.results) {

            }
            document.getElementById("div-dialog").innerHTML += "";
        }
    };

    var timestamp = Number(new Date());
    var hash = calcMD5(timestamp + '2daab94a11d5a191fbdb76d8b9dca01e3e7b9c9b26ece94cad3642a378062e4ef3d652db');
    var caminho = resourceURI + "?ts=" + timestamp + "&apikey=26ece94cad3642a378062e4ef3d652db&hash=" + hash;

    xmlhttp.open("GET", caminho, true);
    xmlhttp.send();

}