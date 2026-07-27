//==============binary to decimal==================//
function binaryNumber(num) {
  let decimal = 0;
  let power = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    let d = Number(num[i]);
    decimal += d * 2 ** power;
    power++;
  }
  return decimal;
}
console.log(binaryNumber("1011"));

//=============decimal to binary====================//
function decimalNumber(n) {
  let binary = "";
  while (n > 0) {
    let r = n % 2;
    binary = r + binary;
    n = Math.floor(n / 2);
  }
  return binary;
}
console.log(decimalNumber(25));

