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

//============with flag====================//

let n = [1, 2, 3, 2, 4, 1];

for (let i = 0; i < n.length; i++) {
  let isDup = false;

  for (let j = 0; j < i; j++) {
    if (n[i] === n[j]) {
      isDup = true;
      break;
    }
  }

  if (isDup) {
    console.log(n[i]);
  }
}

//===============remove duplicate===================//
let m = [1, 2, 2, 3, 4, 4];
let l = [];

for (let i = 0; i < m.length; i++) {
  let isD = false;
  for (let j = 0; j < l.length; j++) {
    if (m[i] === l[j]) {
      isD = true;
      break;
    }
  }

  if (!isD) {
    l.push(m[i]);
  }
}
console.log(l);

//======== with Set method =============//

let p = [1, 2, 2, 3, 4, 4];
let r = [...new Set(p)];
console.log(r);  

//======with filter ==============//
let Arr = [9, 8, 9, 7, 8, 6]

let result = Arr.filter((item, index) => {
  return Arr.indexOf(item) === index;
});

console.log(result);