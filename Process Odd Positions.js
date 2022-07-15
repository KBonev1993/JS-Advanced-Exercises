function oddPositions(input){
    let oddElements = []
    for (let index = 1; index < input.length; index += 2) {
            oddElements.push(Number(input[index] * 2))
    }
    let reversedElements = oddElements.reverse()
    return(reversedElements.join(" "))
}
