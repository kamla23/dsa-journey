//============checking single number===================//
let n = 153;

let temp = n;
let c = 0;

//====for count digit=============//
let t = n;
while (t > 0) {
  c++;
  t = Math.floor(t / 10);
}
// console.log(c);

//=========== sum of power ==========//

let sum = 0;
while (temp > 0) {
  let d = temp % 10;
  let p = 1;
  for (let i = 0; i < c; i++) {
    p *= d;
  }
  sum += p;
  temp = Math.floor(temp / 10);
}

if (sum === n) {
  console.log("Armstrong number");
} else {
  console.log("Not Armstrong number");
}
