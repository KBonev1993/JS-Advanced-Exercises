function solvePies(pies, start, end){
    const startIndex = pies.indexOf(start);
    const endIndex = pies.indexOf(end) + 1;
    return(pies.slice(startIndex, endIndex))
}
