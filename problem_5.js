function isEvenlyDivisibleBy(x, quotient){
    return x % quotient === 0;
}

function problem5(max) {
    for (var i = 10; true ; i++) {
        for (var j = 2; j<=max; j++) {
            if (!isEvenlyDivisibleBy(i, j)){
                break;
            }
            if (j == max) {
                console.log(i);
                return i;
            }
        }
    }
}

problem5(20);
