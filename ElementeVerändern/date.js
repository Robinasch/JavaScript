function changeColor() {
    var liste = document.getElementsByTagName("h2");
    for (var i = 0; i < liste.length; i++) {
       if (liste[i].className) {
          liste[i].classList.remove("colorRed")
       } else {
          liste[i].className = "colorRed";
       }
    }
 }