//============count negative and positive in array======================//

let arr = [2, -3, 5, -1, 0, 4];

let p = 0;
let n = 0;
let z = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        p++;
    }else if(arr[i] < 0){
        n++;
    }else{
        z++;
    }
}
console.log(p,n,z); 
