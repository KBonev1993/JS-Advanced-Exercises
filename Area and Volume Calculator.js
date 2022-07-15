function solve(areaIn, volIn, input) {
   let current = JSON.parse(input);
   let result = [];
   
   for (let element of current) {
       let currResult = {
           area: areaIn.call(element),
           volume: volIn.call(element)
      };

         result.push(currResult);
      }

      return(result);
   }
   
