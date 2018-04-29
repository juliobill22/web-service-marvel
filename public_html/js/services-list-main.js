function listPersonagens() {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);

            var txt = "";

            for (i in myObj.data.results) {
                txt += "<tr onclick=" + String.fromCharCode(34) + "openDetails(" + String.fromCharCode(39) + myObj.data.results[i].id + String.fromCharCode(39) +"," + String.fromCharCode(39) + myObj.data.results[i].name + String.fromCharCode(39) + ")" + String.fromCharCode(34) + ">\n\
                                    <td>" + myObj.data.results[i].id + "</td>\n\
                                    <td><img src=" + myObj.data.results[i].thumbnail.path + "." + myObj.data.results[i].thumbnail.extension + ">" + " " + myObj.data.results[i].name + "</td>\n\
                                    <td>" + getSeries(myObj.data.results[i].series) + "</td>\n\
                                    <td>" + getEvents(myObj.data.results[i].events) + "</td>\n\
                                </tr>";
            }
            document.getElementById("list-main").innerHTML +=
                    "<table border=" + String.fromCharCode(39) + "0" + String.fromCharCode(39) + " cellspacing=" + String.fromCharCode(39) + "4" + String.fromCharCode(39) + " cellpadding=" + String.fromCharCode(39) + "3" + String.fromCharCode(39) + ">" +
                    "    <thead>" +
                    "        <tr>" +
                    "            <th></th>" +
                    "            <th></th>" +
                    "            <th></th>" +
                    "            <th></th>" +
                    "        </tr>" +
                    "    </thead>" +
                    "    <tbody>" + txt + "</tbody>" +
                    "</table>";
        }
    };
    var timestamp = Number(new Date());
    var hash = calcMD5(timestamp + '2daab94a11d5a191fbdb76d8b9dca01e3e7b9c9b26ece94cad3642a378062e4ef3d652db');
    var caminho = "https://gateway.marvel.com:443/v1/public/characters?ts=" + timestamp + "&orderBy=name&limit=50&apikey=26ece94cad3642a378062e4ef3d652db&hash=" + hash;

    xmlhttp.open("GET", caminho, true);
    xmlhttp.send();
}

function getSeries(series) {
    var txtSerie = "";
    if (series.returned > 0) {
        for (var i = 0; i < series.items.length; i++) {
            if (i < 3) {
                txtSerie += series.items[i].name + "<br>";
            }
            else {
                break;
            }
        }
    }
    return txtSerie;
}

function getEvents(events) {
    var txtEvent = "";
    if (events.returned > 0) {
        for (var i = 0; i < events.items.length; i++) {
            if (i < 3) {
                txtEvent += events.items[i].name + "<br>";
            }
            else {
                break;
            }
        }
    }
    return txtEvent;
}

function openDetails(id_characters, name_characters) {

    var dialog = document.querySelector("#myDialog");

    dialog.open = true;

    var div = document.createElement("div");
    div.setAttribute("id", "div-dialog");
    var h1 = document.createElement("h1");
    var h2 = document.createElement("h1");

    h1.innerHTML = id_characters;
    h2.innerHTML = name_characters;
    div.innerHTML =
            "<header> " +
            "  <span onclick=" + String.fromCharCode(39) + "closeDialog()" + String.fromCharCode(39) + ">&times;</span>" +
            "  <h2>Detalhes do Personagem</h2>" +
            "</header>" +
            "<div>" +
            "  <p></p>" +
            "  <p>text..</p>" +
            "</div>" +
            "<footer>" +
            "  <p>Footer</p>" +
            "</footer>";

    div.appendChild(h1);
    div.appendChild(h2);
    dialog.appendChild(div);


}

function closeDialog() {
    dialog.close;
}