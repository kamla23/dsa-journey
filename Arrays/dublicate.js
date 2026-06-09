//==============without method dublicate=================//

let arr = [1, 2, 3, 2, 4, 1];
let a = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      a.push(arr[i]);
    }
  }
}
console.log(a);

//============== with object============//

let b = [1, 2, 3, 2, 4, 1];
let f = {};
let d = [];
for (let num of b) {
  if (f[num] === undefined) {
    f[num] = 1;
  } else {
    f[num]++;
  }
}

for (let k in f) {
    if (f[k] > 1) {
      d.push(Number(k));
    }
  }
console.log(d);
