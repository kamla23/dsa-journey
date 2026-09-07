

function sumDigit(num) {

    let sum = 0;

    while (num > 0) {

        let r = num % 10;

        sum += r;

        num = Math.floor(num / 10);
    }

    return sum;
}

function armstrongNumber(num) {

    let original = num;
    let n = num;

    let count = 0;

    while (n > 0) {

        let r = n % 10;

        count++;

        n = Math.floor(n / 10);
    }

    let sum = 0;

    while (num > 0) {

        let digit = num % 10;

        sum += digit ** count;

        num = Math.floor(num / 10);
    }

    return sum === original;
}


function perfectNumber(num) {

    let i = 1;
    let sum = 0;

    while (i < num) {

        if (num % i === 0) {

            sum += i;
        }

        i++;
    }

    return sum === num;
}


let input = document.getElementById("numberInput");

let operation = document.getElementById("operation");

let button = document.getElementById("btn");

let result = document.getElementById("result");


button.addEventListener("click", function () {

    let num = Number(input.value);

    let selectedOperation = operation.value;


    if (selectedOperation === "sum") {

        let sum = sumDigit(num);

        result.innerHTML = `
            <h2>Result</h2>
            <p>Number: ${num}</p>
            <p>Sum of Digits: ${sum}</p>
        `;

    }

    else if (selectedOperation === "armstrong") {

        let isArmstrong = armstrongNumber(num);

        result.innerHTML = `
            <h2>Result</h2>
            <p>Number: ${num}</p>
            <p>
                Armstrong Number:
                ${isArmstrong ? "Yes" : "No"}
            </p>
        `;

    }

    else if (selectedOperation === "perfect") {

        let isPerfect = perfectNumber(num);

        result.innerHTML = `
            <h2>Result</h2>
            <p>Number: ${num}</p>
            <p>
                Perfect Number:
                ${isPerfect ? "Yes" : "No"}
            </p>
        `;

    }

    else {

        result.innerHTML = `
            <p>Please select an operation.</p>
        `;
    }

}); 