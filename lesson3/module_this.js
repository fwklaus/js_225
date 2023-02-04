// Use "node moduleThis.js" to run this code

var foo = 'foo';
bar = 'bar';
let qux = 'qux';

console.log(this.foo);    // => undefined
console.log(this.bar);    // => undefined
console.log(this.qux);    // => undefined
console.log(this);        // => {}


// Node.js wraps files in the below function which disallows the use of this to reference the execution context

/*
(function (exports, require, module, __filename, __dirname) {
  // your code is here
});
*/