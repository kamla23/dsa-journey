//====Date 07/08/2026=========================//

function diStringMatch(s) {
  let low = 0;
  let high = s.length;
  let r = [];
  for (let ch of s) {
    if (ch === "I") {
      r.push(low);
      low++;
    } else {
      r.push(high);
      high--;
    }
  }
  r.push(high);
  return r;
}
console.log(diStringMatch("IDID"));
console.log(diStringMatch("III"));
console.log(diStringMatch("DDI"));