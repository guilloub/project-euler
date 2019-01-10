var _ = require('lodash');
var utils = require("./primesUtils.js");


function findPrimesUpTo(max) {
    var primes = [2, 3, 5];
    while (true) {
        var largestPrime = primes[primes.length - 1];
        var nextPrime = utils.findNextPrimeV2(largestPrime, primes);

        if (nextPrime >= max) {
            break;
        }

        primes.push(nextPrime);
    }
    console.log(primes.length);
    console.log(primes);
    console.log(primes[primes.length - 1]);
    console.log(primes.reduce((total, x) => x + total, 0));
    return primes;
}

function problem10(max) {
    var sum = _.range(max)
        .filter(x => utils.isPrime(x))
        .reduce((total, x) => x + total, 0);

    console.log('sum : ' + sum);
}

var startDate = Date.now();
findPrimesUpTo(2000000);
// problem10(2000000);
var millis = Date.now() - startDate;

console.log("seconds elapsed = " + millis + "ms");
