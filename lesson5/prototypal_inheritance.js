// 1
/*
let foo = {};
let bar = Object.create(foo);

foo.a = 1;

console.log(bar.a); // 1

// 2

let foo = {};
let bar = Object.create(foo);

foo.a = 1;
bar.a = 2;
console.log(bar.a); // 2
/*

// 3
/*
Given the code below, do we know for certain that on the last line we are ultimately referencing a property owned by boo? How can we test that far is not delegating to boo?

-- We do not know for sure. Call hasOwnProperty on far, and pass the property name to determine if far is delegating to boo for the method call.

*/

let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code

far.myProp;       // 1
console.log(far.hasOwnProperty('myProp')); // false
