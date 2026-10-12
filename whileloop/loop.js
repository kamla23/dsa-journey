//=============== print from 1 to 10====================//
// let a = 10;
// let i = 1;
// while (i <= a){
//     console.log(i);
//     i++;
// }

//============ print from 10 to 1 ========================//

// let a = 10;
// let i = a;
// while(i > 0){
//     console.log(i);
//     i--;
// }

//================ Date - 03/09/2026=======================//

//========= print all even number from 1 to 100 =============//

// let num = 100;

// let i = 1;
// while (i <= num) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

//==================== print all odd number ====================//
// let num = 100;

// let i = 1;
// while (i <= num) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

//=============== print multiplication from n*1 to n*10==============//

// let n = 5;
// let i = 1;
// while(i <= 10){
//     console.log(n*i);
//     i++;
// }

//==================sum of first n naturals numbers===========================//

// let num =  10;
// let sum = 0;
// let i = 1;
// while(i <= num){
//     sum += i;
//    i++;
// }
// console.log(sum);

//=================== sum of all even numbers==============================//

// function evenSum(num) {
//   let i = 1;
//   let sum = 0;
//   while (i <= num) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//     i++;
//   }
//   return sum;
// }
// console.log(evenSum(10));

//==================== sum of all odd numbers==============================//
// function oddSum(num) {
//   let i = 1;
//   let sum = 0;
//   while (i <= num) {
//     if (i % 2 !== 0) {
//       sum += i;
//     }
//     i++;
//   }
//   return sum;
// }
// console.log(oddSum(10));

//================ factorial number ======================//

// function factorialNumber(num) {
//   let i = num;
//   let f = 1;
//   while (i > 0) {
//     f *= i;
//     i--;
//   }
//   return f;
// }
// console.log(factorialNumber(5));

//==========Date - 04/09/2026================//

//==================== Prodcut Digit=========================//

// function digitProduct(digit) {
//   let p = 1;
//   while (digit > 0) {
//     let l = digit % 10;
//     p *= l;
//     digit = Math.floor(digit / 10);
//   }
//   return p;
// }
// console.log(digitProduct(625));

//============== count total number of digit ====================//

// function countDigit(num){
//   let count = 0;

//   while(num > 0){
//     let l = num%10;
//     count++;
//     num = Math.floor(num/10);
//   }
//   return count;
// }
// console.log(countDigit(3457));

//======================== reverse number =====================================//

// function reverseNumber(num){
//   let rev = 0;
//   while(num > 0){
//     let l = num%10;
//     rev = rev*10+l;
//     num = Math.floor(num/10);
//   }
//   return rev;
// }
// console.log(reverseNumber(12345));

//====================== palindrome number=====================================//

// function palinDrome(num) {
//   let o = num;
//   let r = 0;
//   while (num > 0) {
//     let l = num % 10;
//     r = r * 10 + l;
//     num = Math.floor(num / 10);
//   }

//   if (r === o) {
//     return "palindrome";
//   } else {
//     return "not palindrome";
//   }
// }
// console.log(palinDrome(121));
// console.log(palinDrome(234));

//=============== Date - 05/09/2026 ================================//

//=========== sum digit =====================================//

// function sumDigit(num){
//   let sum = 0;
//   while(num > 0){
//     let r = num%10;
//     sum += r;
//     num = Math.floor(num/10);
//   }
// return sum;
// }
// console.log(sumDigit(345));
// console.log(sumDigit(234))

//==================== Armstrong number ==========================//

// function armstrongNumber(num) {
//   let o = num;
//   let n = num;
//   let c = 0;
//   while (n > 0) {
//     let r = n % 10;
//     c++;
//     n = Math.floor(n / 10);
//   }

//   let sum = 0;
//   while (num > 0) {
//     let l = num % 10;
//     sum += l ** c;
//     num = Math.floor(num / 10);
//   }

//   if (sum === o) {
//     return "Armstrong Number";
//   } else {
//     return "Not Armstrong Number";
//   }
// }
// console.log(armstrongNumber(153));
// console.log(armstrongNumber(234));
// console.log(armstrongNumber(1634));

//=====================  Perfect Number =========================== //

// function perfectNumber(num) {
//   let i = 1;
//   let sum = 0;
//   while (i < num) {
//     if (num % i === 0) {
//       sum += i;
//     }
//     i++;
//   }
//   if (sum === num) {
//     return "Perfect Number";
//   } else {
//     return "Not Perfect Number";
//   }
// }
// console.log(perfectNumber(4));
// console.log(perfectNumber(6));

//============  Date - 07/09/2026 ===================//

//===================  Prime Number =====================//

// function primeNumber(n) {
//   let num = 2;
//   while (num <= n) {
//     let i = 2;
//     let isPrime = true;
//     while (i < num) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//       i++;
//     }
//     if (isPrime) {
//       console.log(num);
//     }
//     num++;
//   }
// }
// primeNumber(100);

//====================== check prime number or not ========================//

// function primeNum(num){
//   while(num < 2){
//     return "not prime number";
//   }
//   let i = 2;
//   while(i < num){
//     if(num%i === 0){
//       return "not prime number";
//     }
//     i++;
//   }
//   return "prime number";
// }
// console.log(primeNum(7));
// console.log(primeNum(10));

//================ fabonacci number seriese =====================//

// function fabonacci(num) {
//   let a = 0;
//   let b = 1;
//   let i = 1;
//   while (i <= num) {
//     console.log(a);
//     let t = a + b;
//     a = b;
//     b = t;
//     i++;
//   }
// }
// fabonacci(7);

// Date - 08/09/2026  //

//============= Fabonacci Sum =================//

// function fabonacciSum(num){
//   let a = 0;
//   let b = 1;
//   let i = 1;
//   let sum = 0;
//   while(i <= num){
//     sum += a;
//     let t = a+b;
//     a = b;
//     b = t
//     i++;
//   }
// return sum;
// }
// console.log(fabonacciSum(7));

//======================== square number=======================//

// function squareNumbers(n){
//   let i = 1;
//   while(i <= n){
//     console.log(i*i);
//     i++;
//   }
// }
// squareNumbers(10)

//================= cube number ===========================//

// function cubeNumbers(n) {
//   let i = 1;

//   while (i <= n) {
//     console.log(i * i * i);
//     i++;
//   }
// }
// cubeNumbers(5);

//================= divisible by 7 ===================//

function divisibleBy7(a, b) {
  let i = a;
  while (i <= b) {
    if (i % 7 === 0) {
      console.log(i);
    }
    i++;
  }
}
divisibleBy7(10, 50); 
