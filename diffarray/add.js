
let arr = [1,1,1,1,0,1,0];
let diff = new Array(arr.length).fill(0);
console.log(diff);

let S = 0;
let L = 3;
let V = 2;
diff[S] += V;
diff[L+1]-= V;

console.log(diff)

let c = 0;
for(let i = 0; i < arr.length; i++){
    c += diff[i];
    arr[i] = c;
}
console.log(arr);