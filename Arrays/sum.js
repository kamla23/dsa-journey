//=================with loop without method================//

let arr =  [4,5,6,7,2];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum);

//==================with method (reduce)===================//

let a = [4,5,6,7,2];
let add = a.reduce((acc, curr) => acc+curr,0);
console.log(add);


//================ with for ..of loop==================//
let b = [4,5,6,7,2];
let s = 0;
for(let num of b){
    s += num
}
console.log(s);

//===============with forEach method==================//

let c = [4,5,6,7,2];

let summ = 0;
c.forEach(num => {
    summ +=num;
});
console.log(summ);