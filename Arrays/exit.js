
//============with loop==================//
let arr = [1,2,3,4,5,6,7];
let num = 11;

let found = false;

for(let i = 0; i < arr.length; i++){
    if(arr[i] === num){
        found = true;
        break;
    }
}
if(found){
    console.log("yes");
}else{
    console.log("no");
}

//==============with includes method==============//

let a = [1,2,3,4,5,6,7];
let n = 7;
if(a.includes(n)){
    console.log("yes");
}else{
    console.log("no");
}