//===========with swap======================//
function moveZero(arr){
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp
            j++;
        }
    }
    return arr;
}
console.log(moveZero([0,1,0,3,12]))

//==============with destructuring swap=====================//

