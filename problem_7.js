var utils = require("./primesUtils.js");

function problem7(maxIndex) {
    var primes = [2,3,5];
    while (primes.length < maxIndex) {
        var nextPrime = utils.findNextPrime(primes[primes.length - 1]);
        primes.push(nextPrime);
    }
    console.log(primes.length);
    console.log(primes[primes.length - 1]);
}

var startDate = Date.now();
problem7(10001);
var millis = Date.now() - startDate;
console.log("seconds elapsed = " + millis + "ms");
