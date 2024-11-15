function zeichneSchachbrett() {
    var result = '';
    
    result += '<div class="schachbrett">';

    for (var i = 0; i < 64; i++) {
        var isEvenRow = Math.floor(i / 8) % 2 === 0;
        var isEvenCol = i % 2 === 0;
        
        var color = (isEvenRow === isEvenCol) ? 'white' : 'black';
        
        result += '<div class="feld ' + color + '"></div>';
    }

    result += '</div>';

    document.getElementsByTagName("body")[0].innerHTML = result;

    setInterval(changeColors, 100);
}

function changeColors() {
    var fields = document.querySelectorAll('.feld');
    
    fields.forEach(function(field) {
        if (field.classList.contains('white')) {
            field.classList.remove('white');
            field.classList.add('black');
        } else if (field.classList.contains('black')) {
            field.classList.remove('black');
            field.classList.add('pink');
        } else if (field.classList.contains('pink')) {
            field.classList.remove('pink');
            field.classList.add('green');
        } else if (field.classList.contains('green')) {
            field.classList.remove('green');
            field.classList.add('blue');
        } else if (field.classList.contains('blue')) {
            field.classList.remove('blue');
            field.classList.add('white');
        } 
    });
}

zeichneSchachbrett();
