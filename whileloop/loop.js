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

function factorialNumber(num) {
  let i = num;
  let f = 1;
  while (i > 0) {
    f *= i;
    i--;
  }
  return f;
}
console.log(factorialNumber(5)); 


