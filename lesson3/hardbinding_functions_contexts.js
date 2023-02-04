/*
//1
Function.prototype.bind

2//
doesn't output anything. the method returns a new function that binds the calling function to the context object passed as an argument. We are not invoking the returned function

//3
output: 5

//4
output: JavaScript makes sense!

We permanently bind the foo function to the positiveMentality context object on `line 10`, and return a new function which is then used to initialize `bar`. On `line 15` we set a `logMessage` property on `negativeMentality` and initalize it to the `bar` function. Even though the context changes for the function, the function is still hardbound to `positiveMentality`, which is why `line 16` outputs `JavaScript makes sense!`. `this` in that context still references the hardbound context, not the current context of the object where the function is assigned


//5
output: 'Amazebulous'

Again, the `bar` function is hardbound to the `obj` object context. When we call the `bar` function, `this` references `obj`. We call `obj.a`, which returns `Amazebulous`. 

*/
