
// let arr = [10, 12, 34, 11, 4, 5, 1];
// let i = 3;

// let start = arr.length-i;

// for(let j = start;  j < arr.length; j++){
//     console.log(arr[j]);
// }

//============with empty array===================//
let arr = [10, 12, 34, 11, 4, 5, 1];
let i = 5;

let result = [];

for (let j = arr.length - i; j < arr.length; j++) {
  result.push(arr[j]);
}
console.log(result);  

//=============with slice===================//

let n = [10, 12, 34, 11, 4, 5, 1];
let k = 3;

let r = n.slice(arr.length - k);
console.log(r);

