var primes = [];
var factors = [];

function getPrimeFactors(n) {
    for(var i=2; i<=n; i++) {
        if(i === n) {
            factors.push(i);
            break;
        }

        if (isPrime(i)) {
            primes.push(i);
        } else {
            for( var j = 0; j<primes.length; j++){
                var p = primes[j];
                if(n % p === 0) {
                    factors.push(p);
                    n = n/p;
                    break;
                }
            }
        }
    }
    return factors;
}

function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

var n = 600851475143;
var factors = getPrimeFactors(n);

console.log('highest prime factor of ' + n + ' is ' + factors.pop());




