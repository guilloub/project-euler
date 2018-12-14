console.log('hello world');

function isMultipleOf3or5(n) {
    return n % 3 === 0 || n % 5 === 0;
}

function findAllMatchingCriteria(limit) {
    var numbers = [];
    for(i=1; i<limit; i++){
        if (isMultipleOf3or5(i)) {
            numbers.push(i);
        }
    }
    return numbers;
}

var numbers = findAllMatchingCriteria(1000);
console.log(numbers);

var somme = numbers.reduce(function (sum, n) {
    return sum += n;
}, 0);
console.log(somme);
