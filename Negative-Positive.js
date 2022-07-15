function negativePositive(input){
let numbers = [];
for (let index = 0; index < input.length; index++) {
    if (Number(input[index] >= 0)){
        numbers.push(Number(input[index]))
    } else{
        numbers.unshift(Number(input[index]))
    }    
}console.log(numbers.join("\r\n"))
}
