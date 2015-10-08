var url = "https://alumnoscurso.azure-mobile.net/Tables/Alumno";

function procesarDatos(data) {

    var salida = document.getElementsByTagName("tbody");
    salida[0].innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        salida[0].innerHTML += "<tr>";
        salida[0].innerHTML += "<td>" + data[i].nombre +
            "</td><td>" + data[i].apellidos +
            "</td><td><button type'button'  onclick='borrar(\"" + data[i].id + "\")'>Borrar</button></td>";
        salida[0].innerHTML += "</tr>";
    }

}

function conGet(e) {

    $.get(url, procesarDatos);

}

function conAjax(e) {
    e.preventDefault();
    var obj = {
        nombre: $("#nombre").val(),
        apellidos: $("#apellido").val()
    }

    $.ajax({

        method: "post",
        url: url,
        success: conGet(),
        error: function (err) {
            console.log(err);
        },
        data: JSON.stringify(obj),
        dataType: "json",
        headers: {
            "Content-Type": "application/json"
        }

    });

}


function borrar(id) {

    $.ajax({
        method: "delete",
        url: url + "/" + id,
        success: conGet,
        error: function (err) {
            console.log(err);
        }
    });

}
$(document).ready(function () {
    conGet();
    $("#enviar").click(conAjax);


});