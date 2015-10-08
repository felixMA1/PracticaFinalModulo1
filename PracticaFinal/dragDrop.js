function drag(event) {
    event.dataTransfer.setData("objeto", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("objeto");
    if (event.target.localName === "ul")
        event.target.appendChild(document.getElementById(data));
}


var li = document.querySelectorAll("li");
var disponibles = document.querySelector("#disponibles");
var elegidas = document.querySelector("#elegidas");

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("dragstart", drag);
}

elegidas.addEventListener("dragover", allowDrop);
elegidas.addEventListener("drop", drop);

disponibles.addEventListener("dragover", allowDrop);
disponibles.addEventListener("drop", drop);