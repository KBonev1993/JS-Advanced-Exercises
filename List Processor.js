function solve(params){
    let result = [];

    params.forEach(element => {
        let [command, word] = element.split(" ");
        if (command == 'add'){
            result.push(word);
        }else if(command == 'remove'){
            result = result.filter(a => a !== word);
        }else if(command == 'print'){
            console.log(result.join(","))
        }
    });
}
