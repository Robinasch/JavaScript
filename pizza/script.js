window.addEventListener("load", initialize);

function initialize() {
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("remove").addEventListener("click", remove);
}

function add() {
    var ingredients = document.getElementById("ingredients");
    
    if (ingredients.selectedIndex > -1 ) {
        //todo: ausgewählte Zutat von der linken in die rechte Listbox verschieben 
         var selectedOption = ingredients.options[ingredients.selectedIndex];
        
         var newOption = document.createElement("option");
         newOption.text = selectedOption.text;
         newOption.value = selectedOption.value;

         choice.add(newOption);
         
         ingredients.remove(ingredients.selectedIndex);
     }
 }
    

function remove() {
    var choice = document.getElementById("choice");
    
    if (choice.selectedIndex > -1 ) {
        //todo: ausgewählte Zutat von der rechten in die linke Listbox verschieben
         var selectedOption = choice.options[choice.selectedIndex];
        
         var newOption = document.createElement("option");
         newOption.text = selectedOption.text;
         newOption.value = selectedOption.value;

         ingredients.add(newOption);
         
         choice.remove(choice.selectedIndex);
    }
}