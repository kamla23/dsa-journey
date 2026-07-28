
//================= whithout method and with method========================//
function shuffle(s, indices) {
//   let ans = [];
  let ans = new Array(s.length);

  for (let i = 0; i < s.length; i++) {
    ans[indices[i]] = s[i];
  }

  let str = "";
  for (let j = 0; j < ans.length; j++) {
    str += ans[j];
  }
  return str;
}
console.log(shuffle("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(shuffle("acb", [0,2,1]));



