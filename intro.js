/************ Display some data *************/
// console.log("It works !!!");
// console.log('hello world')

/************ Ask data to the user *************/
const readlineSync = require("readline-sync");
// let userName = readlineSync.question('Can you give me your name please?');
// console.log("Hello " + userName);

/************ Variables *************/
// let age = 27
// let phrase = "Coding is fun"
// let isTrue = true
// let isFalse = false
// let sisterAge = age + 11;
// age += 12; // age = age + 12;
// console.log(age);

/************ Strings *************/
// let name = 'Jean'
// let sisterName = 'Emma'
// console.log('Hello ' +name + ' and '+ sisterName)
// let userName = readlineSync.question("What's your name?");
// console.log("He's called " + userName);

/************ new Number() *************/

// let htmlBadges = new Number(readlineSync.question('How many HTML badges do you have?'));
// let cssBadges = new Number(readlineSync.question('How many CSS badges do you have?'));
// let totalBadges = htmlBadges + cssBadges;
// console.log('Woaw, you have ' + totalBadges + "!");

/************ Beware of variable types ! *************/

// console.log('10' + '5'); // '105' => string type
// console.log(10 + 5); // 15 => number type

/************ Exercise 1.0 - Interactive Mode *************/
/*Launch node in interactive mode and use it to make an addition.
Then repeat the same step until you have tested all five arithmetic operators we presented before.
Wonderful ! From now on you'll never need a calculator anymore.*/

/************ Exercise 1.1 Define a variable and display it in the console. *************/
// let user = 'rouslan'
// console.log(user)

/************ Exercise 1.2 Define three variables: name, firstName and city.
 * Display them like this: "Your name is Gerard Lambert and you live in Paris.". *************/

 // let city = 'Paris'
 // let firstName = 'Gerard'
 // let name = 'Lambert'
 // console.log(`Your name is ${firstName} ${name} and you live in ${city} `)

/************ Exercise 1.3 Ask the user to enter its first name and display a message saying "Hello first name". *************/

// let userName = readlineSync.question('What is your name ?');
// console.log('Hello ' + userName)

/************ Exercise 1.4 Make this same thing as Exercise 2
 but this time ask the user for the name, the first name and the city. *************/

// let firstName = readlineSync.question('What is your first name ?');
// let name = readlineSync.question('What is your name ?');
// let city = readlineSync.question('Where do you live ?');
// console.log('Your first name is '+ firstName + ' ' + name + ' and you live in ' + city)

/************ Exercise 1.5 Ask two numbers with decimal part to the user.
 For the first one only keep the integer part. Then multiply them and display the result.
 You will have to perform a search on Google to know how to only keep the integer part of a number. *************/

// let firstNumber = readlineSync.question('What is your first number ?');
// let secondNumber = readlineSync.question('What is your second number ?');
// console.log(Math.floor(firstNumber) * Math.floor(secondNumber))

/************ Exercise 1.6 Ask two integers to the user. Display the rest of the integer division of the two numbers. *************/
// let firstNumber = readlineSync.question('What is your first number ?');
// let secondNumber = readlineSync.question('What is your second number ?');
//
// console.log(firstNumber % secondNumber)


