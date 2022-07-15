function sumFirstLast(input){
    let total = 0;
    for (let index = 0; index < input.length; index++) {
        if (index == 0 || index == input.length - 1 ){
            total += Number(input[index]);
        }
    }
console.log(total);
}
