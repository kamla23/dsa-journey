//===========================================

// let x = 5;
// function add(y){
//     return x+y;

// }
// console.log(add(3));


//====================================
// let x = 10;

// function test() {
//     let x = 5;
//     return x;
// }

// console.log(test());

//==========================================

// let x = 10;

// function test() {
//     return x;
// }
// console.log(test());

//===========================================

// let x = 10;

// function test() {
//     let x = 5;
//     function inner() {
//         return x;
//     }
//     return inner();
// }

// console.log(test());
//==========================================

// let x = 10;
// function test() {
//     function inner() {
//         return x;
//     }
//     let x = 5;
//     return inner();
// }

// console.log(test());

//=======================================

let x = 1;

function outer() {
    let x = 2;

    function inner() {
        let x = 3;
        return x;
    }

    return inner();
}

console.log(outer());