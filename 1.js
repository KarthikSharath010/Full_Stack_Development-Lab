//a. Write a script that Logs "Hello, World!" to the console. Create a script that calculates the sum of two numbers and displays the result in an alert box.
console.log("Hello World!");

const prompt=require("prompt-sync")();

let n1=parseFloat(prompt("Enter the first number: "));
let n2=parseFloat(prompt("Enter the second number: "));

let sum=n1+n2;

console.log("The sum is: "+sum);


//b. Create an array of 5 cities and perform the following operations: Log the total number of cities. Add a new city at the end. Remove the first city. Find and log the index of a specific city.
let cities = ['New York', 'Los Angeles', 'Chicago', 'Bengaluru', 'Dubai'];

console.log("Total cities: "+ cities.length);

let a = prompt("Enter city to push: ");
cities.push(a);
console.log("After adding: "+ cities);


cities.shift();
console.log("After removing first city: "+ cities);

console.log("Index of 'Bengaluru': "+ cities.indexOf("Bengaluru"));
