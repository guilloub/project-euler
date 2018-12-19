function isPalidromique (num) {
    var s = num.toString();
    for (var index = 0; index < s.length/2 ; index++) {
        var a = s[index];
        var b = s[s.length - index - 1];

        if (a !== b) {
            return false;
        }
    }
    return true;
}

var result = isPalidromique(99);
console.log(result);

function exo4(max) {
    var palidroms = [];
    for (var a = max; a>0; a--){
        for (var b = max; b > 0; b--) {
            x = a * b;
            if (isPalidromique(x)) {
                palidroms.push(x);
            }
        }
    }
    var max = palidroms.reduce((e, max) => e > max ? e : max, 0)
    console.log(palidroms.length);
    console.log(max);
}

function exo4Bis(max) {
    var palidroms = [];
    for (var a = max; a > max/10; a--) {
        for (var b = max; b > max/10; b--) {
            x = a * b;
            if (isPalidromique(x)) {
                var result = {
                    'x': x,
                    'a': a,
                    'b': b,
                }
                palidroms.push(result);
            }
        }
    }
    var max = palidroms.reduce((e, max) => e.x > max.x ? e : max, { 'x': 0 })
    console.log(palidroms.length);
    console.log(max);
}

var startDate = Date.now();
result = exo4Bis(999);
var millis = Date.now() - startDate;
console.log("seconds elapsed = " + millis + "ms");
