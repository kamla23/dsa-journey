// let arr = [1, 2, 3, 4];
// let t = 2;
// let found = false;

// for(let num of arr){
//     if(num === t){
//         found = true;
//         break;
//     }
// }
// console.log(found);


let arr = [2, 7, 11, 15];
let t = 18;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === t) {
      console.log(arr[i], arr[j]);
    }
  }
}










