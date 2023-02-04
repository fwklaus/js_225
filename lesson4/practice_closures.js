/*
// 1

- when invoked and passed a number
  - returns a function
    - function logs every positive integer multiple of that number
      - between num and 100
      function makeMultipleLister(num) {
        return function () {
    for (let i = num; i <= 100; i++) {
      if (i % 13 === 0) console.log(i);  
    }
  }
}

let lister = makeMultipleLister(13);
lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91
*/


/*
// 2

- program uses two functions
    - add, subtract
      - both manipulate running total value
- when functions are invoked with a number
  - add or subtract that number from running total
  - log new total to the console
  
  let total = 0;

function add(num) {
  return total += num;
}

function subtract(num) {
  return total -= num;
}


console.log(add(1));
// 1
console.log(add(42));
// 43
console.log(subtract(39));
// 4
console.log(add(6));
// 10
*/


/*
// 3
How can you set the value of systemStatus to the value of the inner variable status without changing startup in any way?

- need to set value of systemStatus to 'ready'
- do not change the startup function in any way

answer: There's no way to access the value of status outside the closure of the returned function! It's a private variable.
*/

function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
// let systemStatus = // ?