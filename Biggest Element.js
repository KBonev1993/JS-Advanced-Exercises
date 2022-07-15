function biggestElement(input){
    let matrix = input
    let maxNumber = -10000;
    for (let row of matrix){
        for (let col of row){
            if (col > maxNumber){
                maxNumber = col;
            }
        }
    }
    console.log(maxNumber);
}
