/**************** Exercise 4.1 ***************************
 Create a function named calcSurface that takes the length and width of a rectangle and returns its surface.
 Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle.
 That program must use the function you created.

 Write a documentation for the calcSurface function. */
// const readlineSync = require("readline-sync");
//
// let calcSurface = (a,b) => length * width
//
// let length = parseInt(readlineSync.question('What is the rectangle length ?'))
// let width = parseInt(readlineSync.question('What is the rectangle width ?'))
//
// console.log(length,' ', width)
// console.log(calcSurface())

/**************** Exercise 4.2  ***************************

 Create a function named rand10() that returns a random integer between 1 and 10.
 Create a program that will display the result of that function each time it is run.
 Write a documentation for the rand10() function.

 You will have to search on Google how to generate random numbers in JavaScript for this exercise.
 */

// let rand10 = () => Math.floor(Math.random() * 11) // this function returns a random number between 0 and 10
// console.log(rand10())

/**************** Exercise 4.3  ***************************

 By reusing the function rand10() created in Exercise 2, write a function named multiRand(n)
 that returns an array of n numbers between 1 and 10.
 You should not modify anything in rand10() to achieve this.
 Write a documentation for the multiRand(n) function.
 Use that function to create a program that will ask the number of random numbers
 to generate then display that same number of random numbers.
 */

let rand10 = () => Math.floor(Math.random() * 11)

    let multiRand = Array.from(Array(rand10()).keys()) // returns an array with index from 0 to 10

console.log(multiRand)
