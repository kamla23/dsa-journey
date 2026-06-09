
//=========== without method===========//
let arr = [1, 2, 2, 3, 2];
let x = 2;
let c = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] === x){
        c++;
    }
}
console.log(c);

//===========with filter method===============//
let a = [1, 2, 2, 3, 2];
let b = 2
let count = a.filter(num => num === b).length;
console.log(count);

//============for all element without method=================//
let arrr = [1, 2, 2, 3, 1];
let f = {};
for(let i = 0; i < arrr.length; i++){
    let n = arrr[i];
    if(f[n] === undefined){
        f[n] = 1;
    }else{
        f[n]++;
    }
}
console.log(f);  

//=============with forEach method =========================//
let h = [1, 2, 2, 3, 1];
let fre = {};
h.forEach((k =>{
    fre[k] = (fre[k]||0)+1;

}));
console.log(fre);

