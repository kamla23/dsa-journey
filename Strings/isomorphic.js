//==============Date-11/08/2026===================//

function isIsomorphic(s, t) {
  let mapst = {};
  let mapts = {};

  for (let i = 0; i < s.length; i++) {
    let a = s[i];
    let b = t[i];

    if (mapst[a] !== undefined && mapst[a] !== b) {
      return false;
    }

    if (mapts[b] !== undefined && mapts[b] !== a) {
      return false;
    }

    mapst[a] = b;
    mapts[b] = a;
  }
  return true; 
}
console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("f11", "b23")); // false
console.log(isIsomorphic("paper", "title")); // true
