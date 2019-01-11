var _ = require('lodash');

function findDivisors(n) {
    var divisors = [];

    for (var i = 1; i <= Math.sqrt(n); i++)
    {
        if (n % i == 0) {
            // If divisors are equal, print only one
            if (n / i == i) {
                divisors.push(i);
            } else {
                divisors.push(i);
                divisors.push(n / i);
            }
        }
    }

    return divisors.sort();
}

function findTriangleNumbersUpTo(maxIndex) {
    var list = [];

    for (var i = 1; i <= maxIndex; i++){
        var n = _.sum(_.range(1, i+1));
        list.push(n);
    }

    return list;
}

function problem(nbDivisors) {
    var list = findTriangleNumbersUpTo(20000);

    var nbDivisorFound = 0;
    var i = 1;
    while (nbDivisorFound < nbDivisors) {
        i++;
        var n = list[i - 1];

        var divisors = findDivisors(n);
        nbDivisorFound = divisors.length;

        console.log(i + ' => max : ' + n + ' => found ' + nbDivisorFound + ' divisors')
    }
}


var startDate = Date.now();
problem(500);
var millis = Date.now() - startDate;
console.log("seconds elapsed = " + millis + "ms");
