function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function findNextPrime(current) {
    var i = current + 1;
    while (true) {
        if (isPrime(i)){
            return i;
        }
        i++;
    }
}

function isPrimeV2(n, primes) {
    var primesToTest = primes.filter(x => x < n/2);

    if (primesToTest.some(x => n % x === 0)) {
        return false;
    }
    return true;
}

function findNextPrimeV2(current, primes) {
    var i = current + 1;
    while (true) {
        if (isPrimeV2(i, primes)) {
            return i;
        }
        i++;
    }
}

module.exports = {
    isPrime: isPrime,
    findNextPrime: findNextPrime,
    isPrimeV2: isPrimeV2,
    findNextPrimeV2: findNextPrimeV2,
};
