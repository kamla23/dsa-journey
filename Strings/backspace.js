//Date - 04/08/2026
//====================backspace compare=======================//
function backspace(s, t) {
  function buildString(str) {
    let stack = [];
    for (let char of str) {
      if (char === "#") {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
    return stack.join("");
  }
  return buildString(s) === buildString(t);
}
console.log(backspace("ab#c", "ad#c"));
console.log(backspace("ab##", "c#d#"));
console.log(backspace("a#c", "b"));
