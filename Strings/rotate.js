//================= without method===================//
function stringRotate(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  let com = s + s;
  for (let i = 0; i < com.length; i++) {
    let match = true;
    for (let j = 0; j < goal.length; j++) {
      if (com[i + j] !== goal[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return true;
    }
  }
  return false; 
}
console.log(stringRotate("abcde", "cdeab"));
console.log(stringRotate("abcde", "abced"));

//====================with includes method=====================//

function rotateString(str, aim){
    if(str.length !== aim.length){
        return false;
    }
    let c = str+str;
    return c.includes(aim);
}
console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "abced"));
