var _ = require('lodash');

var cache = [];

function countNbpaths(size, x, y) {
    if (x === size && y === size) {
        return 1;
    }

    if (cache[x] != null && cache[x][y] != null) {
        return cache[x][y];
    }

    var countIfRight = 0;
    var countIfBot = 0;

    if (x < size) {
        countIfRight = countNbpaths(size, x+1, y);
    }
    if (y < size) {
        countIfBot = countNbpaths(size, x, y+1);
    }

    if(!cache[x]) {
        cache[x] = [];
    }
    cache[x][y] = countIfRight + countIfBot;

    return cache[x][y];
}

function problem(size) {
    var totalPaths = countNbpaths(size,0,0);
    console.log("total paths for a " + size + " by " + size + " grid = " + totalPaths);
}

var startDate = Date.now();
problem(20);
var millis = Date.now() - startDate;
console.log("seconds elapsed = " + millis + "ms");
