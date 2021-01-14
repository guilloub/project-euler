// find all paths in a matrix given u can move one step right OR bottom each Time
// then find the mmaximum number of points you can score

// a optimiser avec de la programmation dynamique
// https://www.techiedelight.com/introduction-dynamic-programming/

function createTestArray(N) {
  const test = [];
  for (var i = 1; i <= N; i++) {
    const tmp = [];
    for (var j = 1; j <= N; j++) {
      tmp.push(i);
    }
    test.push(tmp);
  }
  return test;
}

const testArray = createTestArray(12);
console.log(JSON.stringify(testArray));

const storedResults = Array.from(
  Array(testArray.length),
  () => new Array(testArray.length)
);
console.log(storedResults.length, storedResults[0].length);

function findAllPaths(A, x = 0, y = 0) {
  const maxX = A.length - 1;
  const maxY = A[0].length - 1;

  // console.log("x", x, "y", y);

  if (x === maxX && y === maxY) {
    return [[{ x, y }]];
  }

  storedResult = storedResults[x][y];
  if (storedResult != null) {
    return storedResult;
  }

  let moveXPaths = [];
  let moveYPaths = [];

  if (x < maxX) {
    moveXPaths = findAllPaths(A, x + 1, y);
  }

  if (y < maxY) {
    moveYPaths = findAllPaths(A, x, y + 1);
  }

  let result = [];
  for (var path of moveXPaths) {
    result.push([{ x, y }, ...path]);
  }
  for (var path of moveYPaths) {
    result.push([{ x, y }, ...path]);
  }

  storedResults[x][y] = result;
  return result;
}

const result = findAllPaths(testArray);

const sums = result.map(path => {
  return path.reduce((prev, curr) => {
    return prev + testArray[curr.x][curr.y];
  }, 0);
});

// console.log(JSON.stringify(sums));

const max = sums.reduce(function (a, b) {
  return Math.max(a, b);
});
console.log(max);
