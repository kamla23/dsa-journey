//=====================Date - 19/08/2026=======================//
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let diff = new Array(arr.length).fill(0);
// console.log(diff);
let S = 0;
let L = 5;
let V = 10;
diff[S] += V;
diff[L + 1] -= V;
// console.log(diff);
let c = 0;
for (let i = 0; i < arr.length; i++) {
  c += diff[i];
  arr[i] = c;
}

console.log(arr);
