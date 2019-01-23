function nextIfEven(n) {
    return n/2;
}

function nextIfOdd(n) {
    return (n * 3) + 1;
}

function findNext(n) {
    if (n%2 === 0) {
        return nextIfEven(n);
    } else {
        return nextIfOdd(n);
    }
}

function computeSequence(n) {
    var startingNumber = n;
    var nbElement = 1;
    while(n > 1) {
        n = findNext(n);
        nbElement++;
        if (nbElement%1000 === 0) {
            console.log("startingNumber: " + startingNumber + " =>" + nbElement + "th element")
        }
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

    console.log("startingNumberMax: " + startingNumberMax + " =>" + nbElementMax + " elements")
}

var startDate = Date.now();
problem(1000000);
var millis = Date.now() - startDate;
console.log("seconds elapsed = " + millis + "ms");
