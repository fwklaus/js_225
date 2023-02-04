// 1
/*
Use partial function application to implement a function, makeSub, that returns a function that subtracts 5 from the argument passed to the return function.

- makeSub
  - takes an integer
  - returns a function
    - define parameter to accept second argument
    - the function returns the value of calling subtract, passing the value of second argument retained in closure, and the first argument provided when we inoke the returned function 
      - subtract(first, second)
      
      function subtract(a, b) {
        return a - b;
}

function makeSub(num2) {
  // implement this function using partial function application
  return function(num1) {
    return subtract(num1, num2);
  }
}

const sub5 = makeSub(5);

console.log(sub5(10)); // 5
console.log(sub5(20)); // 15

*/

// 2
/*
This code is a bit limited however, because we can only subtract by 5. Implement the makeSubN function below so that we can supply any value we want to be subtracted from a, and get a new function that will always subtract this value.

- we want to supply any value we want to be subtracted from a
  - a provided to the applicator return function
  - b provided to the generator makeSubN function
    - result provided by call to the primary subtract function

    
    function subtract(a, b) {
  return a - b;
}

function makeSubN(n) {
  // implement this function using partial function application
  return function(subtractor) {
    return subtract(subtractor, n);
  }
}

const sub4 = makeSubN(4);
const sub7 = makeSubN(7);

console.log(sub4(10)); // 6
console.log(sub4(20)); // 16
console.log(sub7(10)); // 3
console.log(sub7(20)); // 13
*/

// 3
/*
Although the solution above is more flexible, we now want to be able to supply any operation, not just subtraction. Implement makePartialFunc below.



function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b)
  }
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);
let divideBy2 = makePartialFunc(divide, 2);

console.log(multiplyBy5(100)); // 500
console.log(divideBy2(100)); // 50
*/


// 4

/*
In our previous solution, multiplyBy5 retains access to func and b long after makePartialFunc has finished execution. What makes this possible?

- The `func` function and local variable `b` are retained by the closure for `multiplyBy5`
*/

// 5

/*
Implement makeMathRollCall such that it returns a partially applied rollCall function, with the subject as 'Math'.

- makeMathRollCall returns a function
  - function takes an array
  - the function then calls follCall(subject, students)
    - outputs the students in the partially applied array

*/

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    rollCall('Math', students);
  }
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan
