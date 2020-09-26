var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "green";


ctx.lineWidth = 3; //outline widht
ctx.strokeStyle = "black"; //outline color
ctx.strokeRect(10, 10, 384, 280); //outside rectangle
ctx.fillRect(12, 12, 380, 276); //inside rectange
//create circle
var centerX = c.width / 2; // detect center
var centerY = c.height / 2;
ctx.beginPath();
ctx.arc(centerX, centerY, 70, 0, 2 * Math.PI, false); //circle
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke(); //black color