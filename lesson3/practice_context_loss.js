// 1

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

let getTurkDescription = turk.getDescription.bind(turk);

logReturnVal(turk.getDescription, turk);
/*
output: Undefined undefined is a undefined

On  `line 17`, we pass the method `turk.getDescciption`  to the `logReturnVal` function as an argument, but we do not invoke it. In the function, the argument is used to initialize the `func` parameter which we then invoke on `line 13`, assigning the return value to local variable `returnVal`. We call the method inside the function, however, and since we don't provide an explicit context, the `this` in the function refers to the global object. There are not properties defined on the global object by the names we reference, so each reference returns `undefined`.
*/

// 2
/*
  output: Cristopher Turk is a Surgeon.

 - alter `logReturnVal` such that it takes an additional `context` argument
 - use one of the methods we've learned in this lesson to invoke `func` inside `logReturnVal` with the supplied `context` as its function execution context
 - alter the invocation of `logRetunValue` and supply `turk` as the context argument
*/

//3

/*
- we want to extract getDescription from turk, but always have it execute turk as its context
- use one of the methods we've learned to assign  a permanently bound function to a new variable, `getTurkDescription` 
*/

//4

let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    });
  }
};

TESgames.listGames();

/*
desired output: 
The Elder Scrolls Arena
The Elder Scrolls Daggerfall
The Elder Scrolls Morrowind
The Elder Scrolls Oblivion
The Elder Scrolls Skyrim

actual:
undefined Arena
undefined Daggerfall
undefined Morrowind
undefined Oblivion
undefined Skyrim

Regular callback functions (not arrow functions) do not preserve the execution context. The actual output reflects this, in that the `this` when we call the function references the `window`, or `global` object, where the appended property on each call returns `undefined`. On each call, a value from `this.titles` is passed to the callback where it binds to the function parameter, which is why the name referenced by `title` is output on each iteration
*/

// 5
/*
- use an arrow function so that the code logs our desired output

let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    this.titles.forEach((title) => {
      console.log(this.seriesTitle + ' ' + title);
    });
  }
};

TESgames.listGames();
*/

//6

/*
let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    let self = this;
    this.titles.forEach(function (title) {
      console.log(self.seriesTitle + ' ' + title);
    });
  }
};

TESgames.listGames();

- use the let self = this fix to alter TESgames.listGames so that it logs the desired output
*/

// 7

/*
let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    this.titles.forEach(function(title){
      console.log(this.seriesTitle + ' ' + title);
    }, TESgames);
  }
};

TESgames.listGames();

- use the built-in argument provided by forEach to supply the execution context
*/

// 8

let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
/*
The function definition in the incrementA method of the `foo` object loses the execution context, so `this` references the `global` object on each call to `foo.incrementA()`. The value of `foo.a` will be `0` after the code has executed. We never alter the `a` property's value.
*/

//9

/*
let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  }
};

foo.incrementA(foo);
foo.incrementA(foo);
foo.incrementA(foo);
console.log(foo.a) // 3
- use one of the methods we've learned to invoke `increment` with explicit context
- `foo.a` should be incremented with each invocation of `incrementA`
*/

// 10

foo = {
  a: 0,
  incrementA() {
    let increment = function() {
      this.a += 1;
    }.bind(this);

    increment()
    increment();
    increment();
  }
};

foo.incrementA();
console.log(foo.a);

/*
- we want each invocation of `foo.incrementA` to increment `foo.a` by `3`, rather than `1`
- use bind to permanently set `foo` as `increment`'s execution context
*/
