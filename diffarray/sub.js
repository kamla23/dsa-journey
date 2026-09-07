
//============Date - 20/08/2026=======================//

let arr = [20, 20, 20, 20]
let S = 1;
let L = 2;
let V = 5;
let diff = new Array(arr.length + 1).fill(0);
console.log(diff);

diff[S] -= V;
console.log(diff)
if (L + 1 < arr.length) {
    diff[L + 1] += V;
}
console.log(diff)

let c = 0; 
for (let i = 0; i < arr.length; i++) {
    c += diff[i];
    arr[i] += c;
}
console.log(arr); 



