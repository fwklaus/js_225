// 1
/*
Constructor function names are capitalized

eg
function FunctionName () {
  ...
}
*/

// 2
/*
  We forget to call the constructor with the `new` keyword, so the `scamper` method is defined on the global object

  Calling `scamper()` on `lizzy` results in a type error. The lizzy variable is set to `undefined` when we initialize it to a call to `Lizard`, and we attempt to call an undefined property `scamper` on `undefined`.
  
  
  function Lizard() {
    this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper();
*/


// 3

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // I'm scampering!