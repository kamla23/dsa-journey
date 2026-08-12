
//====Date - 12/08/2026============//

function sortString(s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let count = new Array(26).fill(0);
  let result = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (s[i] === alphabet[j]) {
        count[j]++;
        break;
      }
    }
  }

  while (result.length < s.length) {
    for (let i = 0; i < 26; i++) {
      if (count[i] > 0) {
        result += alphabet[i];
        count[i]--;
      }
    }

    for (let i = 25; i >= 0; i--) {
      if (count[i] > 0) {
        result += alphabet[i];
        count[i]--;
      }
    }
  }
  return result;
}
console.log(sortString("aaaabbbbcccc"));
console.log(sortString("rat"));
