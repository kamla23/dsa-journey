

function highestDigit(n) {
  let high = 0;
  while (n > 0) {
    let digit = n % 10;
    if (digit > high) {
      high = digit;
    }
    n = Math.floor(n / 10);
  }
  return high; 
}
console.log(highestDigit(5832)); 
