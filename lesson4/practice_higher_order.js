// 1

/*
- Higher order functions are objects
- They are objects that accept functions as input, return functions as output, or both
*/

// 2

/*
let numbers = [1, 2, 3, 4];
function checkEven(number) {
  return number % 2 === 0;
}

numbers.filter(checkEven); // [2, 4]

Between `checkEven` and `filter`, `filter` is a higher-order function. Filter takes the `checkEven` function as an argument, and on each iteration passes the function one of the elements from the calling object where it binds to `number`, which is then used in the function body to produce a result.

`checkEven` does not take a function argument, nor produce one as output
*/

// 3

let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function (num) {
    return num % 2 === 0;
  }
}

let checkEven = makeCheckEven();

console.log(numbers.filter(checkEven)); // [2, 4]


// 4

function execute(func, operand) {
  return func(operand);
}

console.log(execute(function(number) {
  return number * 2;
}, 10)); // 20

console.log(execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy')); // "HEY THERE BUDDY"

// 5 

function makeListTransformer(func) {
  return function (array) {
    let returnArray = [];
    array.forEach(number => {
      returnArray.push(func(number));
    });
    return returnArray;
  }
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]
