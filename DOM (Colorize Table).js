function colorize() {
    let button = document.querySelector('button').value
    let allElements = document.querySelectorAll("tr");
    for (let element = 1; element < allElements.length; element += 2) {
        allElements[element].style = "background-color: teal";
    }
}
