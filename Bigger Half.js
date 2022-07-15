function biggerHalf(input){
    let numbersSorted = input.sort((a,b) => a - b);
    let half = Math.floor(numbersSorted.length / 2);
    let finalNumbers = numbersSorted.splice(half, numbersSorted.length);
    return(finalNumbers)
}
