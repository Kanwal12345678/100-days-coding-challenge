//Define variables
let mango = "mango";
let upperCaseMango = "MANGO";
let twenty = 20;
let thirty = 30;
let fruits = ["Mango", "Apple", "Banana"]

//test for equality and inequality with strings

console.log("is mango equal to mango");
console.log(mango == "mango");

console.log("is mango not equal to mango");
console.log(mango != "mango");

//tests using the lower case function
console.log("is MANGO equal to mango after converting to lowercase?");
console.log(upperCaseMango.toLowerCase() == "mango");

console.log("is MANGO not equal to mango after converting to lowercase?");
console.log(upperCaseMango.toLowerCase() != "mango");

//numerical tests
console.log("is twenty equal to thirty?");
console.log(twenty == thirty);

console.log("is twenty not equal to thirty?");
console.log(twenty != thirty);

console.log("is twenty greater than thirty?");
console.log(twenty > thirty);

console.log("is twenty less than thirty?");
console.log(twenty < thirty);

console.log("is twenty greater than or equal to thirty?");
console.log(twenty >= thirty);

console.log("is twenty less than or equal to thirty?");
console.log(twenty <= thirty);

//test using "&&" (and)
console.log("twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);

//test using "||" (or)
console.log("is twenty equal to 10 or twenty is greater than 10?");
console.log(twenty == 10 || twenty > 10);

//test whether an item is include in array
console.log("is Mango included in the fruits array?");
console.log(fruits.includes("Mango"));

console.log("is Mango not include in the fruits array?");
console.log(!fruits.includes("Mango"));