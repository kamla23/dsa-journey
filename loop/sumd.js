let n = 1234;

let temp = n;

let sum = 0;

while(temp > 0){
    let d = temp%10;
    sum+=d;
    temp = Math.floor(temp/10);
}
console.log(sum);