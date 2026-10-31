import readline from "readline-sync";
let num;
let largest = -Infinity;

do {
  num = Number(readline.question("Enter a Number: "));
  if (num !== 0 && num > largest) {
    largest = num;
  }
} while (num !== 0); 

if (largest === -Infinity) {
  console.log("No Number was entered.");
} else {
  console.log("Largest Number", largest);
} 
