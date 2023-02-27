// 1 
/*
Write a function that returns the object on a given object's prototype chain where a property is defined.

-  takes object and property key
- returns the object on the object's prototype chain where the property is defined

- method to get the prototype of an object
  - getPrototypeOf()
- iterate over the objects protype chain
  - on each iteration
    - check if the object has the property key as its own property
      - if so, return the obj  
    - if not, assign the obects protype to the object
    
    function getDefiningObject(object, propKey) {
  while (true) {
    if (Object.getPrototypeOf(object) === null) break;
    
    if (object.hasOwnProperty(propKey)) {
      return object;
    } else {
      object = Object.getPrototypeOf(object);
    }
  }

  return null;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null
*/

// 2

/*
Write a function to provide a shallow copy of an object. The object that you copy should share the same prototype chain as the original object, and it should have the same own properties that return the same values or objects when accessed. Use the code below to verify your implementation:

- for...in iterates over an objects properties, including all inherited properties 
- the object that we copy should share the same prototype chain as the original object 
  - we need to prototype the protype of the given object
- the object should have the same own properties that return the same values or objects when accessed as the given object

- copy should inherit from the same prototype chain
  - prototype the object's prototype
    Object.create(Object.getPrototype(object))
- copy should have the same own properties of the object
  - iterate over the object - for..in
    - if a property is the object's own property, add it to the copy
      copy.property = object.property
      
      function shallowCopy(object) {
        let copy = Object.create(Object.getPrototypeOf(object));
  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      copy[property] = object[property];
    }
  }
  
  return copy;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
console.log(baz.hasOwnProperty('a'));  // false
console.log(baz.hasOwnProperty('b'));  // false
*/

// 3

/*
Write a function that extends an object (destination object) with contents from multiple objects (source objects).

- takes an empty object
- takes a list of extra arguments
  - access with arguments by index
    - extra arguments start at 1
*/

function extend(destination) {  
  for (let i = 1; i < arguments.length; i++) {
    let obj = arguments[i];
    destination = Object.assign(destination, obj);
  }

  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
