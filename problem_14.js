function findNext(n) {
    if (n % 2 === 0) {
        return n / 2;
    } else {
        return (n * 3) + 1;
    }
}

function computeSequence(n) {
    var startingNumber = n;
    var nbElement = 1;
    while(n > 1) {
        n = findNext(n);
        nbElement++;
    }
    return nbElement;
}

function problem(max) {
    startingNumberMax = 0;
    nbElementMax = 1;

    for(var i=2; i<max; i++) {
        var nbElement = computeSequence(i);

        if (nbElement > nbElementMax) {
            nbElementMax = nbElement;
            startingNumberMax = i;
        }
    }

    console.log("startingNumberMax: " + startingNumberMax + " => " + nbElementMax + " elements")
}

var startDate = Date.now();
problem(1000000);
var millis = Date.now() - startDate;
console.log("seconds elapsed = " + millis + "ms");
