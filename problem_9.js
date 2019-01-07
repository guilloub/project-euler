function isPythagorean(a, b, c) {
    return a < b && b < c
        && (a * a) + (b * b) === (c * c);
}

function problem9 (sum) {
    var result = [];
    for (a = 1; a < sum; a++) {
        for (b = a + 1; b < sum ; b++) {
            var c = sum - a - b;
            if (isPythagorean(a, b, c)) {
                result = [a, b, c];
                break;
            }
        }
    }
    return result;
}

var startDate = Date.now();
var triplet = problem9(1000);
var tripletSquared = triplet.map((a) => a*a);
var result = triplet.reduce((a,b) => a*b, 1);

console.log(triplet);
console.log(tripletSquared);
console.log("product is " + result);

var millis = Date.now() - startDate;
console.log("seconds elapsed = " + millis + "ms");
