
let readline = require('readline-sync'); // this readline sync is a good module to start with.

let celsius;

celsius = readline.question("put temp in Celsius:");



// Tf = Tc * (9/5) + 32



let farenhite;

farenhite = celsius * (9/5) + 32;



console.log(celsius + " C is equal to "+ farenhite + " F");
