import readline from "readline-sync";

let num;
let sum = 0;

do {
  num = Number(readline.question("Enter a Number:"));
  if (num !== 0) {
    sum += num;
  }
} while (num !== 0);
console.log("Sum ", sum);


