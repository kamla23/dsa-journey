//===============reverse==================//
function reverse(str) {
  let r = "";
  for (let i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }
  return r;
}
console.log(reverse("kamla"));

//============with method===================//
let s = "kamla";
let rev = s.split("").reverse().join("");
console.log(rev);

//====================Array string==========================//
function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let t = s[left];
    s[left] = s[right];
    s[right] = t;
    left++;
    right--;
  }
  return s;
}
console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H","a","n","n","a","h"]));