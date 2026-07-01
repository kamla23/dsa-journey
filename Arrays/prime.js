//========prime number===============//

let n = 20;
let primes = [];

for(let num = 2; num <= n; num++){
    let isPrime = true;

    for(let i = 2; i*i<=num; i++){
        if(num%i === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        primes.push(num);
    }
}
console.log(primes);