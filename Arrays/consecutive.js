//==============with loop and flag=============//
let arr = [3, 4, 5, 6, 7, 8, 9];

//  arr.sort((n, m) => (n-m));

let c = true;

for(let i = 0; i < arr.length-1; i++){
    if(arr[i]+1 !== arr[i+1]){
        c = false;
        break;
    }
}
if(c){
    console.log("yes");
}else{
    console.log("no");
}

//===============with method==============//

let a = [3, 4, 5, 6, 7, 8, 9];

let result = a.every((val, i) => {
  if (i === 0) return true; 
  return val === a[i - 1] + 1;
});

console.log(result ? "Yes" : "No");


//==============for unsorted array=================//
let b= [7, 3, 5, 4, 6, 9, 8];

b.sort((a, b) => a - b);
// console.log(b);

let r = b.every((val, i) => {
  if (i === 0) return true;
  return val === b[i - 1] + 1;
});

console.log(r ? "Yes" : "No");