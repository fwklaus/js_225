// 1 
/*
Will the code below execute?

This code throws an error. We need to wrap the function definition in parentheses to invoke it as a function expression.

function() {
  console.log("Sometimes, syntax isn't intuitive!")
}();
*/

// 2
/*
Edit the code from problem one so it executes without error.

(function() {
  console.log("Sometimes, syntax isn't intuitive!")
})();
*/

// Sometimes, syntax isn't intuitive!

// 3 

/*
What kind of problem does this error highlight? Use an IIFE to address it, so that code runs without error.

The following code highlights a variable naming conflict. The function `sum` is hoisted above the variable `sum`, so the reference to `sum` on `line 47 returns the variable pointing to a number. The code throws a `TypeError`, since we can't invoke the number object as a function.


var sum = 0; // 41
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

sum += (function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers); // => 8

// sum += sum(numbers);
console.log(sum) // 49
*/

// 4
/*
Implement a function countdown that uses an IIFE to generate the desired output.



function countdown(count) {
  (function(number) {
    while (number >= 0) {
      console.log(number);
      number -= 1;
    }
    console.log('Done!')
  })(count);
}
countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!
*/


// 5

/*
Is the named function in this IIFE accessible in the global scope?

No, a named function expression's name is only available in the scope of the function expression itself, but not in any surrounding scopes.


(function foo() {
  console.log('Bar');
})();

foo() // RefernceError: foo is not defined 
*/

// 6

/*
For an extra challenge, refactor the solution to problem 4 using recursion, bearing in mind that a named function created in an IIFE can be referenced inside of the IIFE.




*/

function countdown(count) {
  (function(number) {
    while (number >= 0) {
      console.log(number);
      number -= 1;
    }
    console.log('Done!')
  })(count);
}

countdown(7);
