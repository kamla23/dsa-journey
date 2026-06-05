//==========without method==============//
let arr =  [5, 2, 9, 1];
let min = arr[0];

for(let i = 0; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
}
console.log(min);

//============with mehtod===============//

let a = [5, 2, 9, 1];
let m = Math.min(...a);
console.log(m);

//===========with reduce==============//
let b = [5, 2, 9, 1];
let minn = b.reduce((acc, curr) => {
    return acc < curr ? acc:curr
});
console.log(minn);
