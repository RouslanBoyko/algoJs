/************** Exercise 3.1 **********************
 Write a program that will add all the elements of an array.

 Test it with the following arrays:

 [1, 2, 3, 4, 5] => 15
 [100, 101, 102] => 303
*/

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [100, 101, 102]
//
// arr1.push(6,7,8,9,10)
// console.log(arr1)
//
// arr2.push(103,104,105,106,107)
// console.log(arr2)

/************** Exercise 3.2 *********************

 Write a program that will calculate the average value of a given array.

 Test it with the following arrays:

 [1, 2, 3, 4, 5] => 3
 [100, 101, 102] => 101
 * */

// arr1 = [1, 2, 3, 4, 5];
// arr2 = [100, 101, 102];
//
// function calculateAverage(array) {
//     let total = 0;
//     let count = 0;
//
//     array.forEach(function(item, index) {
//         total += item;
//         count++;
//     });
//
//     return total / count; // array.length
// }
//
// console.log(calculateAverage(arr1));
// console.log(calculateAverage(arr2));

/*************************** Exercise 3.3 *******************************
 * Write a program that will create a duplicate of a given array.
 Bonus: make a first version that will only do it using push().
 Make a second version that uses a single method call to perform the copy.
 (You'll have to search on the MDN or Google for this one.)
 */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//
// arr.push(16)
// let copyArray = arr.slice();
// console.log(copyArray)

/*************************** Exercise 3.3 *******************************

 Write a program that will display the minimum and maximum elements of a given array.
 */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//
// console.log(Math.min(...arr))
// console.log(Math.max(...arr))