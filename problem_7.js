function isPrime(n) {
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

function problem7(maxIndex) {
    var primes = [2,3,5];
    while (primes.length < maxIndex) {
        var nextPrime = findNextPrime(primes[primes.length - 1]);
        primes.push(nextPrime);
    }
    console.log(primes.length);
    console.log(primes[primes.length - 1]);
}


var startDate = Date.now();
problem7(10001);
var millis = Date.now() - startDate;
console.log("seconds elapsed = " + millis + "ms");
