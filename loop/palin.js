
let n = 121;
let temp = n;
let rev = 0;

while(temp > 0){
    let d = temp%10;
    rev = rev*10+d;
    temp = Math.floor(temp/10);
}
if(rev === n){
    console.log("palindrome");
}else{
    console.log("not palindrome");
}