function smallestTwoNumbers(input){
    let smallestTwo = [];
    let numbers = input.sort((a,b) => a - b);
    let smallNumberOne = numbers.shift();
    smallestTwo.push(smallNumberOne);
    let smallNumberTwo = numbers.shift();
    smallestTwo.push(smallNumberTwo);
    console.log(smallestTwo.join(' '));
    }
