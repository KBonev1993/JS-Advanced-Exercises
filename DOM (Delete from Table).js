function deleteByEmail() {
    let elements = Array.from(document.querySelectorAll("tbody tr"));
    let input = document.querySelector("input[name='email']").value;
    let found = false;

    for (let element of elements) {
        if (element.children[1].textContent == input){
            let parent = element.parentElement;
            parent.removeChild(element);
            found = true;
        }
    }
    if (found){
        document.getElementById("result").textContent = "Deleted."
    }else{
        document.getElementById("result").textContent = "Not found."
    }
}
