function addItem() {
    let newItem = document.getElementById("newItemText").value;
    let liEelement = document.createElement("li");
    liEelement.textContent = newItem;
    let items = document.getElementById("items");
    items.appendChild(liEelement);
}
