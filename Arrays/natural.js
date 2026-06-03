
//Write a program to create an array of natural numbers till 20 and print it.//

//=================loop=================//
let arr = [];
for(let i = 1; i  <= 20; i++){
    arr.push(i);
}
console.log(arr)

//==================without method=============//

let a  = [];

for(let i = 1; i <= 20; i++){
    a[i-1] = i;
}
console.log(a);

//=====================witn Array.from()==================//

let c  =  Array.from({length:20},(_, i) => i+1);
console.log(c);