
//===========Loop==================//
let arr = [20,48,23,34];
let max = arr[0];
for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(max);


//========while Loop================//
let ar = [20,48,23,34];
let m = ar[0];
let i = 1;
while(i < ar.length){
    if(ar[i] > m){
        m = ar[i];
    }
    i++;
}
console.log(m);


//==========math method============//
let a = [20, 42,56,23];
let M = Math.max(...a);
console.log(M); 


//========== Using Reduce=============//

let array = [2, 5, 1, 8, 3];
let Max = array.reduce((acc, curr) => {
    return curr > acc ? curr:acc;
});
console.log(Max);

