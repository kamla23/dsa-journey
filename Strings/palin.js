
function palinDrom(str) {
  let s = "";
  for (let i = str.length - 1; i >= 0; i--) {
    s += str[i];
  }

  if (s === str) {
    return "palindrom";
  } else {
    return "not palindrom";
  }
}
console.log(palinDrom("madam"));
console.log(palinDrom("lika"));
console.log(palinDrom("RaceCar"));
console.log(palinDrom("level"));
console.log(palinDrom("noon")); 
console.log(palinDrom("Java"));
