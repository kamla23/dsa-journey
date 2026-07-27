

//=============================================
// let x = 10;

// function show() {
//     console.log(x);
// }

// show();

//=============================================

// let x = 5;

// function show() {
//     let y = 10;
// }

// console.log(y);

//=============================================

// let x = 5;

// function show() {
//     console.log(x);
//     let x = 10;
// }

// show();

//====================================

// let x = 5;

// function show() {
//     x = 10;
// }

// show();
// console.log(x);

//========================================

// let x = 5;

// function show() {
//     let x = 10;
// }

// show();
// console.log(x);

//============================================

// function test() {
//     let x = 5;
//     return x;
// }
// console.log(test());

//=====================================================

// let x = 5;
// function test() {
//     return x;
// }

// console.log(test());

//================================================

// let x = 1;

// function a() {
//     let x = 2;
//     console.log(x);
// }
// a();

//================================================

// let x = 1;

// function a() {
//     x = 2;
// }

// a();
// console.log(x);

//=====================================================

let x = 1;

function a() {
    let x = 2;
    function b() {
        console.log(x);
    }
    b();
}

a();