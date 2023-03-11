// Do not forget use new keyword in function constructors
// it returns undefined

// You can add your own methods to default constructors like this
String.prototype.someName = function (someParam) {
  //Some long logic
  return this.length > someParam;
}



// Remember this
var a = 3;
var b = Number(3);

a == b // returns true
a === b // returns false
//It's differrent because a is a primitive and b an object


// Polyfill>
// Fills the gap when a function is not supported in some browsers
// and you have to make some code that does the samething the function does