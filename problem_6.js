function squareSum(max){
    var sum = 0;
    for (var i = 1; i <= max; i++) {
        sum += (i * i);
    }
    return sum;
}

function sumSquare(max) {
    var sum = 0;
    for (var i = 1 ; i <= max ; i++) {
        sum += i;
    }
    return sum * sum;
}

function problem6(max) {
    var a = squareSum(max);
    var b = sumSquare(max);

    var result = b - a;
    console.log(result);
}

var startDate = Date.now();
problem6(100);
var millis = Date.now() - startDate;
console.log("seconds elapsed = " + millis  + "ms");
