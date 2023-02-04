//1
/*
let message = 'Hello from the global scope!';

function func(message) {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(message); // Hello from the function scope!
console.log(message); //  Hello from the global scope!

//2

let myObj = { message: 'Greetings from the global scope!' };

function func(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message);
}

func(myObj); // Greetings from then function scope!

console.log(myObj.message); // Greetings from the function scope!

// The output demonstrates that objects are mutable and that the changes we make to an object referenced by one variable are visible from other variables that reference the same object

//3
let message = 'Hello from the global scope!';

function func() {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(); // Hello from the function scope!
console.log(message); // Hello from the function scope!

//4

let a = 10;
let obj = {
  a
}

let newObj = obj;
newObj.a += 10;

console.log(obj.a === a); // false
console.log(newObj.a === obj.a); // true
*/

//5

let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

// we reassign animal to a new object, we are not mutating the object
animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;
/*

// the two properties reference a different object, but the properties are equal
let menagerie = {
  warthog:  {
              name: 'Timon',
              species: 'Suricata suricatta',
            },

  meerkat: {
              name: 'Timon',
              species: 'Suricata suricatta'
            },
};

*/

// === checks if two objects are the same object, which they are not
menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true


