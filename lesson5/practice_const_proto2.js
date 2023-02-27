// 2
/*
1. Create an object called shape that has a getType method.
2. Define a Triangle constructor function whose prototype is shape. Objects created with Triangle should have four own properties: a, b, c (representing the sides of a triangle), and type.
3. Add a new method to the prototype called getPerimeter.

let shape = {
  getType() {
    return this.type;
  },
};

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = 'triangle';
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
  };

  Triangle.prototype.constructor = Triangle;
  
  
  let t = new Triangle(3, 4, 5);
  console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 12
console.log(t.getType());                   // "triangle"
*/

// 2

/*
Since a constructor is just a function, it can be called without the new operator, and this can lead to unexpected results and errors especially for inexperienced programmers.

Write a constructor function that can be used with or without the new operator, and return the same result in either form. Use the code below to check your solution:

function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last)
  }

  this.name = `${first} ${last}`;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe
*/

// 3

/*
  Create a function that can create an object with a given object as its prototype, without using Object.create.

  - setPrototypeOf(this, obj)
    - use a constructor?

  - do not use Object.create

  - function creates an object
  - sets given object as prototype for the new object

  
  function createObject(obj) {
  function NewObject() {}
  NewObject.prototype = obj;
  return new NewObject();
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true
*/

// 4

/*
Similar to the problem above, without using Object.create, create a begetObject method that you can call on any object to create an object inherited from it:

- create a begetObject method
  - can call on any object
    - creates an object inherited from the caller 

- defined a begetObject method on `foo`
- when called, instantiates an objet using a temporary constructor function
- set the prototype of the new object to the caller, and return the object


let foo = {
  a: 1,
};

Object.prototype.begetObject = function() {
  function NewObj() {}
  NewObj.prototype = this;
  
  return new NewObj();
};


let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true
*/

// 5

/*
Create a function neww, so that it works like the new operator. For this practice problem, you may use Object.create.

- create a function neww
- works like the `new` operator
- may use Object.create
    - doesn't handle arguments

- neww invokes the Person constructor and sets the properties using the arguments array
- john inherits from Person

- call Object.cretate
  - takes an object
    - constructor.prototype
      - returns a reference to the constructor's prototype object
        - object prototype created by the function to serve as the prototype for object's it creates
    - sets the argument as the prototype of the return object
      - set the properties on the return object

  - if     
*/

function neww(constructor, args) {
  let newObject = Object.create(constructor.prototype)
  let result = constructor.apply(newObject, args);
  // return result;
  return typeof result === 'object' ? result : newObject;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}
