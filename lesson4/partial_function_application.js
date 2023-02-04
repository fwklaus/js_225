// 1
// Write a function named greet that takes two arguments and logs a greeting:
/*
function greet(greeting, name) {
  let formattedGreeting = greeting.slice(0, 1).toUpperCase() + greeting.slice(1);

  console.log(`${formattedGreeting}, ${name}!`);
}

greet('howdy', 'Joe');
// Howdy, Joe!
greet('good morning', 'Sue');
// Good morning, Sue!
*/
// 2
// Use the partial function shown above and your solution to problem 1 to create sayHello and sayHi functions that work like this:

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

function greet(greeting, name) {
  let formattedGreeting = greeting.slice(0, 1).toUpperCase() + greeting.slice(1);

  console.log(`${formattedGreeting}, ${name}!`);
}


let sayHello = partial(greet, 'hello');
let sayHi = partial(greet, 'hi')

sayHello('Brandon');
// Hello, Brandon!
sayHi('Sarah');
// Hi, Sarah!
