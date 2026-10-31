function smallestDigit(n) {
  let small = 9;
  while (n > 0) {
    let digit = n % 10;
    if (digit < small) {
      small = digit;
    }
    n = Math.floor(n / 10);
  }
  return small;
}
console.log(smallestDigit(5832));
