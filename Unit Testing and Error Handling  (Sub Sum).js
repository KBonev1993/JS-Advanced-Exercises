function subSum(array, start, end){
    let result = 0;

    if (start <= 0){
        start = 0;
    }
    if (end >= array.length - 1){
        end = array.length - 1;
    }

    for (let i = start; i <= end; i++) {
        result += Number(array[i]);
        
    }
    return result;
}
