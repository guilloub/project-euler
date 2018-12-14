function getFibonnacciSequenceUpTo(max) {
    var seq = [1, 2];
    while (seq[seq.length - 1] <= max){
        var a = seq[seq.length - 1];
        var b = seq[seq.length - 2];
        seq.push(a + b);
    }
    seq.pop();
    return seq;
}

var fib = getFibonnacciSequenceUpTo(4000000);
console.log(fib);

var evenFib = fib.filter(n => n % 2 === 0);

var sumEvenFib = evenFib.reduce(function(sum, n) {
    return sum += n;
}, 0);
console.log(sumEvenFib);
