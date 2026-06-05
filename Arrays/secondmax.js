//===============with if else=============//

let ar = [2, 5, 1, 8, 3];

let max;
let semax;
if (ar[0] > ar[1]) {
    max = a[0];
    semax = a[1];
} else {
    max = ar[1];
    semax = ar[0];
}

if (ar[2] > max) {
    semax = max;
    max = ar[2];
} else if (ar[2] > semax && ar[2] !== max) {
    semax = ar[2];
}


if (ar[3] > max) {
    semax = max;
    max = ar[3];
} else if (ar[3] > semax && ar[3] !== max) {
    semax = ar[3];
}


if (ar[4] > max) {
    semax = max;
    max = ar[4];
} else if (ar[4] > semax && ar[4] !== max) {
    semax = ar[4];
}
console.log(semax); 


//===========using loop==============//
let arr = [2,5,1,8,3];

let largest = -Infinity;
let second = -Infinity;

for(let i = 0; i < arr.length; i++){

    if(arr[i] > largest){
        second = largest;
        largest = arr[i];
    }else if(arr[i] > second && arr[i] !== largest){
        second = arr[i];
    }
}
console.log(second);


//=============with method=============//

let a =[2,5,1,8,3];

let smax = [...new Set(a)].sort((a,b) => b-a)[1];
console.log(smax);



//============with Two pass loop================//

let  b = [2,5,6,4,9,6];
let max2 = -Infinity;
for(let i = 0; i < arr.length; i++){
    if(b[i] > max2){
        max2 = b[i];
    }
}

let smax2 = -Infinity;
for(let i = 0; i < b.length; i++){
    if(b[i] > smax2 && b[i] !== max2){
        smax2 = b[i];
    }
}
console.log(smax2); 
