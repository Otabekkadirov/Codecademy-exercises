// What is JavaScript?
/* JavaScript is a powerful, flexible, and fast programming language now being used 
for increasingly complex web development and beyond!*/

// Console
/* The console is a panel that displays important messages, 
like errors, for developers. Much of the work the computer does with 
our code is invisible to us by default.*/
console.log(26);
console.log(3);


/* Data types - Data types are the classifications we give to the different 
kinds of data that we use in programming.*/
console.log('JavaScript');
console.log(2011);
console.log('Woohoo! I love to code! #codecademy');
console.log(20.49);


// Arithmetic Operators
console.log(26 + 3.5);
console.log(2020 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);
console.log('3 + 4');


// String Concatenation
console.log('Hello' + 'World');
console.log('Hello ' + 'World');


// Properties
console.log('Teaching the world how to code'.length);


// Methods - methods are actions we can perform.
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

// Built-in Objects
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));



// Variables - In programming, a variable is a container for a value.
// Create a Variable: var
var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

// Create a Variable: let
let changeMe = true;
changeMe = false;
console.log(changeMe);

// Create a Variable: const
const entree = 'Enchiladas';
console.log(entree);
const testing;

// Mathematical Assignment Operators
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);

// The Increment and Decrement Operator
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;
console.log(gainedDollar, lostDollar);

// String Concatenation with Variables
let favoriteAnimal = "kitten";

console.log("My favorite animal: " + favoriteAnimal);

// String Interpolation
let myName = 'Otabek';
let myCity = 'Bukhara City';

console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

// typeof operator
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

let myName = 'Otabek';
let mySureName = 'Kadirov';
const myCity = 'Bukhara';
console.log(`My name is ${myName} ${mySureName}. I live in ${myCity}`);