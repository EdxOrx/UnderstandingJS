//Never set a variable as undefined

b();
console.log(a);

var a = 'Hello world';

function b(){
  console.log('Called b!')
}


/* --------------- Execution Stack --------------- */
function two() {

}

function one() {
  two();
}

one();

/* 
The stack works based on the LIFO (last-in-first-out) principle.
When the execution of a function it's finished it's removed
from the stack

|-------------------------------------|
|                                     |
|                                     |
|    |---------------------------|    |
|    |           two()           |    |
|    |---------------------------|    |
|                                     |
|    |---------------------------|    |
|    |           one()           |    |
|    |---------------------------|    |
|                                     |
|    |---------------------------|    |
|    | Global execution context  |    |
|    |---------------------------|    |
|                                     |
|-------------------------------------|
*/

/* --------------- Environment variable --------------- */

function two() {
  var myVar;
}

function one() {
  var myVar = 2;
  two();
}

var myVar = 1;
one();

/* 
Every execution context has it's own 'myVar' with a different value.
Every single time you call a function a new execution context it's
created

|-------------------------------------|
|                                     |
|                                     |
|    |---------------------------|    |
|    |           two()           |    |
|    |         myVar = undefined |    |
|    |---------------------------|    |
|                                     |
|    |---------------------------|    |
|    |           one()           |    |
|    |                 myVar = 2 |    |
|    |---------------------------|    |
|                                     |
|    |---------------------------|    |
|    | Global execution context  |    |
|    |                 myVar = 1 |    |
|    |---------------------------|    |
|                                     |
|-------------------------------------|
*/