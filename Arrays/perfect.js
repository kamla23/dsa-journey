//=============== perfect number=================//
let n = 7;
let sum = 0;

for (let i = 1; i <= n / 2; i++) {
  if (n % i === 0) {
    sum += i;
  }
}
if (sum === n) {
  console.log("true");
} else {
  console.log("false");
}
