var canvas = document.getElementById("myCanvas");

var context = canvas.getContext("2d");


var circulo = function(x,y,r) {
    

    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, false);
    context.fillStyle = "5d2e01";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "#003300";
    context.stroke();

}



context.fillStyle = "#5d2e01";
context.fillRect(350, 10, 320, 100);



circulo(220, 140, 30);
circulo(290, 190, 30);
circulo(380, 210, 30);
circulo(470, 210, 30);
circulo(560, 210, 30);
circulo(650, 210, 30);
circulo(740, 180, 30);
circulo(810, 140, 30);


circulo(210, 240, 30);
circulo(290, 280, 30);
circulo(290, 190, 30);
circulo(380, 310, 30);
circulo(470, 310, 30);
circulo(560, 310, 30);
circulo(650, 310, 30);
circulo(740, 280, 30);
circulo(810, 240, 30);

circulo(210, 340, 30);
circulo(290, 380, 30);
circulo(380, 410, 30);
circulo(470, 410, 30);
circulo(560, 410, 30);
circulo(650, 410, 30);
circulo(740, 380, 30);
circulo(810, 340, 30);


