function posicionCongreso(pos) {

    var pm = pos.coords.latitude + "," + pos.coords.longitude;
    var url = "http://maps.googleapis.com/maps/api/staticmap?center=" + pm + "&zoom=16&size=400x400&sensor=false&markers="+pm;

    document.getElementById("mapaCongreso").src = url;


}

function posicionUser(pos) {
    var pm = "40.437536, -3.715357";
    var url = "http://maps.googleapis.com/maps/api/staticmap?center=" + pm + "&zoom=16&size=400x400&sensor=false&markers="+pm;

    document.getElementById("mapaUser").src = url;


}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(posicionCongreso, function (error) {
        alert("No puedo acceder a la posicion");
    });
    navigator.geolocation.getCurrentPosition(posicionUser, function (error) {
        alert("No puedo acceder a la posicion");
    });
}