


var bild = "ball.png"; //todo
if (bild.src.indexOf("ball.png") > -1) { 
    bild.src = "kreuz.png";
}



var p = document.createElement("p");
p.innerHTML = "<strong>GAME OVER</strong>"; 
p.setAttribute("style", "color:red;");