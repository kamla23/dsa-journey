let arr = [2, 1, 3, 5, 4, 8, 7, 9];
let large = -Infinity;
let slarge = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > large) {
    slarge = large;
    large = arr[i];
  } else if (arr[i] > slarge) {
    slarge = arr[i];
  }
}
console.log(large);
console.log(slarge);  




