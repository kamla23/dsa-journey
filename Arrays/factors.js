//==================factors of a number==========================//
let n = 12;
let arr = [];
for(let i = 1; i <= n; i++){
    if(n%i === 0){
        arr.push(i);
    }
}
console.log(arr);