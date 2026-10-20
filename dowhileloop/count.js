import readline from "readline-sync";

let num = Number(readline.question("Enter a Number: "));
num = Math.abs(num);
let count = 0;

do {
  num = Math.floor(num / 10);
  count++;
} while (num > 0);

console.log("Number of Digits ", count);

