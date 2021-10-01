const readlineSync = require("readline-sync");

/**************** Exercise 4.1 ***************************
 Create a function named calcSurface that takes the length and width of a rectangle and returns its surface.
 Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle.
 That program must use the function you created.

 Write a documentation for the calcSurface function. */


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

 You will have to search on Google how to generate random numbers in JavaScript for this exercise. */


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

// let rand10 = () => Math.floor(Math.random() * 11)
// let multiRand = Array.from(Array(rand10()).keys()) // returns an array with index from 0 to 10
//
// console.log(multiRand)


/**************** Exercise 4.4  ***********************

 Create a function named average(arr) that takes an array of numbers as argument and returns the average.
 Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.
 Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.
 Create a program that asks a number to the user then generate that same amount of random numbers but also displays their average,
 min and max.
 To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.
 Write a documentation for all the functions you created.
 * */

/*
const average = arr =>
{

    let sum = 0
    for (let elm of arr)
    {
        sum += elm;
    }
    return sum / arr.length; // returns the average number of array
}
const min = arr =>
{

    let min = arr[0]
    for (let elm of arr)
    {
        if (elm < min)
        {
            min = elm
        }
    }
    return min // return the minimum of array
}
const max = arr =>
{

    let max = arr[0]
    for (let elm of arr)
    {
        if (elm > max)
        {
            max = elm
        }
    }
    return max //return the maximum number of array
}
const rand10 = () =>
{


    return Math.ceil(Math.random() * 11)   // return a random integer from 0 to 10 included
}
const multiRand = n =>
{

    const array = [];
    for (let i = 0; i < n; i++) {
        array.push(rand10());
    }
    return array // return a array of n random integers from 0 to 10
}

const userResponse = readlineSync.question("How many random numbers do you want in the array? ");
const array = multiRand(userResponse);
console.log(array);
console.log("average:", average(array), "\min:", min(array), "\max:", max(array));
*/

/**************** Exercise 4.5  **********************
Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space.
 That function must return the distance between those two points.
    Examples results:
    Point A = [1, 1], point B = [2, 2] => 1.41
    Point A = [1, 1], point B = [3, 1] => 2
    Point A = [4, 1], point B = [1, 1] => 3
    Point A = [-2, 2], point B = [2, -2] => 5.65
Create a program to use that function.
Write a documentation for the calcDistance function.
Note: You probably need to make some search on Google to learn the mathematical formula to do that.
 You will also probably need to search for useful functions in JavaScript to help you making complex mathematical formulas...
 */

/*
function Point(x,y)
{
    this.x = x;
    this.y = y;


    this.calcDistance = function (point) // returns distance between two points
    {
        let distance = Math.sqrt((Math.pow(point.x-this.x,2))+(Math.pow(point.y-this.y,2)))
        return distance;
    }
}


let newPoint = new Point (10,100)
let nextPoint = new Point (20,25)

console.log(newPoint.calcDistance(nextPoint))
*/
/**************** Exercise 4.6  **********************
Create a function factorial(a) that returns the factorial of a number.
 That function must be recursive. */


function factorial(a)
{
    if (a === 0)
    { return 1; }
    else
    { return a * factorial( a - 1 ); }
}

console.log(factorial(4))

