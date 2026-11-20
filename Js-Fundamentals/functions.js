// default parameter

// function calc(a, b=0) {
//     return (2 *(a + b));
// }

// console.log(calc(2, 3));

// console.log(calc(2));


// rest parameter
// function collectData(name, ...age) {
//     console.log(name);
//     console.log(age);
// }
// collectData("John", 25, 30, 35);

// arrow function
// let add = (a, b) => a + b;


//  console.log(add(2, 3));

// nested function
// function outer(){
//     console.log("I am outer function");
//     function inner(){
//         console.log("I am inner function");
//     }
//     inner();
// }

// console.log(outer());

// Callback functions - These are functions that
// function foo(bar){
//     bar();
// }

// foo(function(){
//     console.log("bar");
// })

// function named(){
//     console.log("bar");
// }

// foo(named);

// function foo(bar){
//     if(itsNight){
//         bar();
//     }

//     if(isDrinksOverCheckOnline){
//         bar();
//     }
// }


// Higher order function HOF
// it take one or more functions as arguments
// it may return a function as a result

// function getCapture(camera){
//     camera();
// }

// getCapture(function(){
//     console.log('Canon');
// });

// function returnFn(){
//     return function(){
//         console.log('Nikon');
//     }
// }

// const fn = returnFn();
// fn();


// pure function - these are function that returns the same output for the same input


// function sayGreeting(name){
//     return `Hello ${name}`;
// }

// console.log(sayGreeting("John")); // Hello John

// let greet = "hello";

// function sayGreeting2(name){
//     return `${greet} ${name}`;
// }

// console.log(sayGreeting2("John")); // hello John

// greet = "hola";
// console.log(sayGreeting2("John")); // hola John

// IIFE - Immediately invoke  function expression, these are functions that are executed immediately they are declared without specially calling them later, this are needed because before es6, there was no way to protect a function without them, and they always exist globally, so it was easy for functions to get polluted, that is if another function or variable has the same name it would be executed

(function (){
    console.log("IIFE");
})()

// Call Stack
/* in a stack of functions the first function into the stack is the first executed, when you call a function or more functions, they are added to the top of the stack and executed in that order. */
// function name(params) {
    
// }

// Recursion - A function that calls itself
// function foo(){
//     console.log("foo");
//     foo();
// }
// 
// const foo = function buz(){
//     foo(); // you can also call buz here, and this is called named function expression, this is useful for debugging
// }

// when using recursion you must have a base case, this is a condition that will stop the recursion from going on forever, if you don't have a base case, it will result in a stack overflow error
function factorial(n){
    if(n === 0){
        return 1;
    }
    return n * factorial(n - 1);
}

function fetchWater(count){
    if (count === 0){
        console.log("fetching water completed");
        return;
    }
    console.log("fetching water....");
    fetchWater(count - 1);
}
console.log(factorial(5));
fetchWater(5);