function diagonalSums(matrix){
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++){
        sumFirstDiagonal += matrix[rowIndex][rowIndex];
        sumSecondDiagonal += matrix[rowIndex][matrix.length - rowIndex - 1];    
    }
    console.log(sumFirstDiagonal + " " + sumSecondDiagonal);
}
