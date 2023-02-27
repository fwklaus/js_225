// 1
/*
let a = 1;
let foo;
let obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

foo = new Foo(); // 2

foo.bar(); // 2
Foo(); // 2

obj = {};
Foo.call(obj); // sets a on the global object // 2
                // sets bar on the global object
obj.bar(); // 2

console.log(this.a); // undefined // outputs 2 in the browser
*/

// 2
/*
let RECTANGLE = {
  area() {
    return this.width * this.height; // this points to RECTANGLE 
  },
  perimeter() {
    return 2 * (this.width + this.height); // this points to RECTANGLE
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this); // NaN
  this.perimeter = RECTANGLE.perimeter.call(this); // NaN
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area); // NaN // 6
console.log(rect1.perimeter); // NaN // 10

// To fix this, we can change the execution context of the method calls to `area` and `rectangle` to the context of the Rectangle object
*/

// 3
/*
Write a constructor function Circle, that takes a radius as an argument. You should be able to call an area method on the created objects to get the circle's area. Test your implementation with the following code:

function Circle(radius) {
  this.radius = radius;
  this.area = function() {
    return Math.PI * (this.radius ** 2);
  };
}

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
*/

// 4
/*

let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();
// ninja.swung: true


Ninja.prototype.swingSword = function() {
  return this.swung;
};
// setting a function on the Constructor's object prototype


console.log(ninja.swingSword()); //true

Calling `swingSword`, JS looks in the calling object, does not find the method, and then looks up the prototypal inheritance chain, and finds the method defined on `Ninja.prototype` and calls it. The function returns the state of the `swung` property in the calling object, which returns `true`
*/

// 5
/*
let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};
// We're reassigning the Ninja constructor function's prototype to a new object
// Does the object prototype of `ninja` reflect the change and now reference the new Ninja.prototype object? Or will the call to `swingSword` return a TypeError since JS can no longer find the method in the prototype inheritance chain?

console.log(ninja.swingSword()); // TypeError: ninja.swingSword is not a function
*/

// 6 

/*
let ninjaA;
let ninjaB;
function Ninja() {
  this.swung = false;
}

ninjaA = new Ninja();
ninjaB = new Ninja();

// Add a swing method to the Ninja prototype which
// returns the calling object and modifies swung

Ninja.prototype.swing = function() {
  this.swung = !this.swung;
  return this;
};

console.log(ninjaA.swing().swung);      // must log true
console.log(ninjaB.swing().swung);      // must log true
*/


// 7

/*
In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

-- Do we have indirect access?
- We can chain method calls on the ninjaA object to access the Ninja constructor


*/


let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object
// console.log(ninjaA.constructor); // [Function: Ninja]

let ninjaB = new ninjaA.constructor();

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true