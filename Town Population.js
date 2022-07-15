function townPopulation(array){
let result = {};
for (let element of array) {
    let tokens = element.split("<->");
    let names = tokens[0];
    let population = Number(tokens[1]);
    if (result[names] == undefined){
        result[names] = population
    }else{
        result[names] += population
    }
}
for (let town in result) {
    console.log(`${town}: ${result[town]}`)
    }
}
