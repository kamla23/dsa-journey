//=========Date - 17/08/2026 ================//

//================without method=============//
function oddString(words) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  // alphabet.split()
  // console.log(alphabet[0]);
  let allDiff = [];

  for (let w = 0; w < words.length; w++) {
    let word = words[w];
    let diffArray = [];

    for (let i = 0; i < word.length - 1; i++) {
      let first;
      let second;

      for (let j = 0; j < alphabet.length; j++) {
        if (word[i] === alphabet[j]) {
          first = j;
        }

        if (word[i + 1] === alphabet[j]) {
          second = j;
        }
      }
      // console.log(first, second)

      let diff = second - first;
      // console.log(diff);

      diffArray.push(diff);
    }
    allDiff.push(diffArray);
  }

  for (let i = 0; i < allDiff.length; i++) {
    let same = true;

    for (let j = 0; j < allDiff[i].length; j++) {
      if (allDiff[i][j] !== allDiff[0][j]) {
        same = false;
        break;
      }
    }

    if (same === false) {
      return words[i];
    }
  }
}
console.log(oddString(["adc", "wzy", "abc"]));
console.log(oddString(["aaa", "bob", "ccc", "ddd"]));


//============with method====================//
function oddstring(words) {
  let allDiff = [];

  for (let w = 0; w < words.length; w++) {
    let word = words[w];
    let diffArray = [];

    for (let i = 0; i < word.length - 1; i++) {
      let first = word[i].charCodeAt(0);
      let second = word[i + 1].charCodeAt(0);

      let diff = second - first;

      diffArray.push(diff);
    }

    allDiff.push(diffArray);
  }

  let common;

  if (sameArray(allDiff[0], allDiff[1])) {
    common = allDiff[0];
  } else {
    common = allDiff[2];
  }

  for (let i = 0; i < allDiff.length; i++) {
    if (!sameArray(allDiff[i], common)) {
      return words[i];
    }
  }

  function sameArray(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
}
console.log(oddstring(["adc", "wzy", "abc"]));
console.log(oddstring(["aaa", "bob", "ccc", "ddd"]));



//================with full method===================//

function oddsstring(words) {

    function getDiff(word) {
        let result = "";

        for (let i = 0; i < word.length - 1; i++) {
            let diff = word[i + 1].charCodeAt(0) - word[i].charCodeAt(0);
            result += diff + ",";
        }

        return result;
    }

    let first = getDiff(words[0]);
    let second = getDiff(words[1]);

    let common = first === second ? first : getDiff(words[2]);

    for (let i = 0; i < words.length; i++) {
        if (getDiff(words[i]) !== common) {
            return words[i];
        }
    }
}

console.log(oddsstring(["adc", "wzy", "abc"]));
console.log(oddsstring(["aaa", "bob", "ccc", "ddd"]));