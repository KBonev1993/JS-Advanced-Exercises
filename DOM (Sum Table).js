function sumTable() {
    let result = 0;
    let elements = Array.from(document.querySelectorAll("tr")).slice(1, -1);
    for (let row of elements) {
        result += Number(row.lastElementChild.textContent);
    }
    document.getElementById("sum").textContent = result;
    }
