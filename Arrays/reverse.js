
let l = [5, 4, 9, 2, 1, 0];

let arr = [];

for(let i = l.length-1; i >= 0; i--){
    arr.push(l[i]);
}
console.log(arr);


//===========with method=================//

let a = [5, 4, 9, 2, 1, 0];
a.reverse();
console.log(a);

//============with temp================//

let b = [5, 4, 9, 2, 1, 0];

let start = 0;
let end = b.length-1;

while(start < end){
   let  temp =  b[start];
    b[start] = b[end];
    b[end] = temp;

    start++;
    end--;
}
console.log(b);