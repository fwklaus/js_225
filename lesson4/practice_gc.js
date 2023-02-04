// 1 

/*
- JavaScript is a garbage-collected language.
- The JS runtime handle memory deallocation
- JS "automatically" discards values and pointers from the stack and the heap when the references to those values and pointers are freed up
*/

// 2

let myNum = 1; // my num points to `1`

function foo() { // `foo` points to function `foo() {}`
  let myArr = ['this is an array']; // myArr points to `['this is an array']` and is function scoped
  // what is eligible for GC here?
  // nothing
}

foo();

// what is eligible for GC here?
// myArr is eligible for GC after the function executes

// more code

// 3

function makeGreeting() {
  let foo = { greeting: 'hello' };
  return function(name) {
    foo.name = name;
    return foo;
  };
}

let greeting = makeGreeting();

// is the object eligible for GC here?

// more code

// Is the object created and assigned to foo on line 29 eligible for garbage collection on line 38?

// The object on `line 29` is not eligible for GC on `line 38`. The returned function retains a reference to it in its closure


// 4 

let bash = {};

// Will the object {} ever be eligible for garbage collection?
/*
objects are eligible for garbage collection. Even though the object is empty, the literal requires space in memory, and is eligible for GC when the program finishes

*/