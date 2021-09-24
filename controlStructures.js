/***************** if *****************/

// let size = 185;
// let weight = 80;
// if ((size >= 150) || (weight >= 45)) {
//     console.log("You probably are and adult");
// }

/***************** else *****************/

// let size = 30;
// let weight = 10;
//
// if ((size >= 150) || (weight >= 15)) {
//     console.log("You probably are an adult");
// } else {
//     console.log("You probably are a child");
// }

/***************** else if *****************/

// let size = 49;
// let weight = 9;
//
// if ((size >= 150) || (weight >= 45)) {
//     console.log("You probably are an adult");
// } else if ((size >= 50) || (weight >= 10)) {
//     console.log("You probably are a child");
// } else {
//     console.log("You probably are a baby");
// }

/***************** while *****************/

// let i = 1;
//
// while (i <= 100) {
//     console.log(i);
//     i += 1;
// }
// This code displays all numbers from 1 to 100

/***************** for *****************/

// for (let i = 1; i <= 100; i += 1) {
//     console.log(i);
// }
// // This code also displays all numbers from 1 to 100

/***************** Exercise 2.1 ****************
 *
 * Ask the user to enter its age.
 * If its age is at least 18 display "You are an adult". If it's not the case display "You are not yet an adult". */

 const readlineSync = require("readline-sync");
// let age = readlineSync.question('Can you give me your age please?');
// if (age>=18)
// {
//     console.log('You are an adult.')
// }
// else
// {
//     console.log('You are not yet an adult.')
// }

/***************** Exercise 2.2 ****************
 *
 * Ask the user to enter three numbers: minAge, maxAge and currentAge. Display if current is between min and max.
 * Bonus: if minAge is greater than maxAge, display an error message to explain the user he's doesn't
 understand anything then exit the program. (It must not ask any other question.)
 * Bonus 2: be polite in the error messages. (facultative)*/

/*
 let minAge = parseInt(readlineSync.question('What is the minAge ?'))
 let maxAge = parseInt(readlineSync.question('What is the maxAge ?'))
 let currentAge = parseInt(readlineSync.question('What is the currentAge ?'))

// let minAge = 1
// let maxAge = 100
// let currentAge = 27

if ((currentAge >= minAge) && (currentAge < maxAge))
{
    console.log(currentAge +' is Between ' + minAge + ' and ' + maxAge)
}
else if (minAge > maxAge)
{
    console.log("You haven't understand this exercise, please read and try again :)")
}
else
{
    console.log("Your age is weird, please read again.")
}

*/


/* **************** Exercise 2.3 ***************

* Display all even numbers between 1 and 100.
* Bonus: do two different versions. The first one should use while and make a loop that will execute 100 times.
The second one should use for and make a loop that will execute 50 times.
 */

// let i = 2
// while (i <= 100)
// {
//     console.log(i)
//     i += 2;
// }

// for (let i = 2 ; i<=50 ; i+=2)
// {
//     console.log(i)
// }

/* **************** Exercise 2.4 ***************

* Count from 1 to 100.
* For every even number display the result of their division by 2.
* For every odd number display the result of their multiplication by 3.
*/

// for (let i = 1 ; i<= 100; i++)
// {
//     if (i === 0) {
//         console.log(i +  " is even");
//     }
//     else if (i % 2 === 0) {
//         console.log(i + " is even and division by 2 equals " + i/2);
//     }
//     else {
//         console.log(i + " is odd and multiplication by 3 equals " + i*3);
//     }
// }


/* **************** Exercise 2.5 **************

Exercise 2.5
* Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again.
* (This program should never end as long as the user didn't chose 42).
* */

// let response = 42
// let userResponse = parseInt(readlineSync.question('What is your favorite number ?'))
//
//
//
//     while(userResponse !== response)
//     {
//          userResponse = parseInt(readlineSync.question('Are you sure ? try again :) ?'))
//     }


/* **************** Exercise 2.6 **************


* Make a program that ask the user to enter a number between 1 and 7.
* Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)
 */

/*
let userResponse = parseInt(readlineSync.question('Choose a number between 1 and 7'))

if (userResponse === 1)
{
    console.log("It's monday !")
}
else if(userResponse === 2)
{
    console.log("It's tuesday !")
}
else if(userResponse === 3)
{
    console.log("It's wednesday !")
}
else if(userResponse === 4)
{
    console.log("It's thursday !")
}
else if(userResponse === 5)
{
    console.log("It's friday !")
}
else if(userResponse === 6)
{
    console.log("It's saturday !")
}
else if(userResponse === 7)
{
    console.log("It's sunday !")
}
else
{
    console.log("Not a right number")
}

*/

/* **************** Exercise 2.7 **************

Make a program that ask the user to enter a number named n.
Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.
Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.
 */

// let userResponse = parseInt(readlineSync.question('give one small number'))
// let total = 0
// for (let n = 1; n<=userResponse ;n++)
// {
//     total += n // total = total + n
//     console.log(n)
// }
// console.log('résultat ' + total)