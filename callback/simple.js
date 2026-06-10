function sum(a, b, callback) {
  return callback(a ,b);
}

function add(x, y) {
  return (x+y);
}

function multi(x, y) {
  return (x%y);
}
console.log(sum(5, 6, add));
console.log(sum(5, 6, multi));  



// function greet(name, callback) {
//  callback(name);
// }

// function sayHello(name) {
//   console.log("Hello "+name);
// }

// greet("Kittu", sayHello);  