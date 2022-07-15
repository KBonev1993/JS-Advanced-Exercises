function calc() {
    let firstInput = document.getElementById("num1").value
    let secondInput = document.getElementById("num2").value
    let result = Number(firstInput) + Number(secondInput);
    document.getElementById("sum").value = result;
    
}
