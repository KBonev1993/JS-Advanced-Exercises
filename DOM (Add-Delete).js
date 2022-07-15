function addItem() {
    let input = document.getElementById("newItemText").value;
    let inputElement = document.createElement("li");
    inputElement.textContent = input;
    let items = document.getElementById("items");

    let button = document.createElement("a");
    button.textContent = '[Delete]';
    button.href = '#';
    inputElement.appendChild(button);

    items.appendChild(inputElement);
    
    function removeElement(){
        items.removeChild(inputElement);
    }
    button.addEventListener("click", removeElement);
}
