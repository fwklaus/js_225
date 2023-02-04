// 1
// In the following code, when can JavaScript garbage collect each of the following arrays? [1], [2], and [1, 2].

let a = [1]; // initialize `a` to [1]

function add(b) {
  a = a.concat(b); // reassign global a to [1, 2] // a new reference
}

function run() {
  let c = [2]; // initialize `c` to [2]
  let d = add(c); // initialize `d` to `undefined`
}

/*
[1] no longer referenced by `a` - marked for GC after reassignment on `line 6`

[2] referened by `c` - still part of `run` closure - but no longer needed after `run` runs, so marked for GC after `line 10` 

[1, 2] referenced by `a` - not marked - global variable doesn't go away until the program ends and discards the `a` variable
*/
run();

// 2
// In the following code, when can JavaScript garbage collect the value ["Steve", "Edie"]?

function makeHello(names) {
  return function() {
    console.log("Hello, " + names[0] + " and " + names[1] + "!");
  };
}

let helloSteveAndEdie = makeHello(["Steve", "Edie"]);

/*
['Steve', 'Edie'] marked for GC after the program ends - `names` is retained by the `helloSteveAndEdie` closure
*/
