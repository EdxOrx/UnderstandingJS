// {} is known as object literal

// Functions are objects
// First class functions: Everything you can do with other types  
// you can do with functions

// Function: a special type of object

function greet() {
  console.log('Hi!');
}

greet.language = 'English';
console.log(greet.language);


// Expressions:
// Unit of code that results in a value

// Statement:
// programming instructions


// Pass by value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

// Pass by reference 
var c = {greeting: 'hi'};
var d;

d = c;

c.greeting = 'Hello';

console.log(c);
console.log(d);

// Callback: function passed to another function to execute

// bind: helps to point to another object with using 'this'
// call: helps to point to another object with using 'this' and execute but you have to pass the arguments one by one
// apply: helps to point to another object with using 'this' and execute but you have to pass the arguments in an array