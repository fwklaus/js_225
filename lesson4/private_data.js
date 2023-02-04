/*
// 1

Create a makeCounterLogger function that takes a number as an argument and returns a function. When we invoke the returned function with a second number, it should count up or down from the first number to the second number, logging each number to the console:

takes an integer as input
returns a function

- integer used to initialize a private variable in the returned functions closure
- the returned function takes an argument
- when we invoke the returned function, we pass an integer
- the function loops from the first argument to the second, outputing the value on each iteration
- iteration ends when the value of the loop matches the argument to the return function

function makeCounterLogger(firstNum) {
  return function (secondNum) {
    let counter = firstNum;
    if (firstNum > secondNum) {
      while (counter >= secondNum) {
        console.log(counter);
        counter -= 1;    
      }
    } else if (firstNum < secondNum) {
      while (counter <= secondNum) {
        console.log(counter);
        counter += 1;
      }
    } else {
      console.log(secondNum);
    }
  }
  
}

let countLog = makeCounterLogger(5);
countLog(8);
// 5
// 6
// 7
// 8
countLog(2);
// 5
// 4
// 3
// 2
*/


/*
// 2
We'll build a simple todo list program using the techniques we've seen in this assignment. Write a makeList function that returns a new function that implements a todo list. The returned function should have the following behavior:

When called with an argument that is not already on the list, it adds that argument to the list.
When called with an argument that is already on the list, it removes the element from the list.
When called without arguments, it logs all items on the list. If the list is empty, it logs an appropriate message.

*/

function makeList() {
  let list = [];
  return function(item) {

    if (item) {
      if (list.includes(item)) {
        let location = list.indexOf(item);
        list.splice(location, 1);
        console.log(`${item} removed!`);
      } else {
        list.push(item);
        console.log(`${item} added!`);
      }
    } else {
      if (list.length > 0) {
        list.forEach(item => {
          console.log(item);
        });
      } else {
        console.log('The list is empty.');
      }
    }
  }
}

let list = makeList();
list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book
