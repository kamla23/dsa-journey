let arr = [1, 2, 4, 5];
let n = 5;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

let sumn = 0;
for (let i = 1; i <= n; i++) {
  sumn += i;
}
console.log(sumn);

let miss = sumn - sum;

console.log(miss);
