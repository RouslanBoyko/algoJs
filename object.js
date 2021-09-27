const readlineSync = require("readline-sync");

/************************** Exercise 5.1 ***********************

Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

    Name
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. The data structure must be elegant.

    Create a program that use that function to generate a TV serie object and display it to the user in JSON format.
*/

/*
let askTvSerie = () =>
{
    let name = readlineSync.question('What is the film name ?')
    let productionYear = parseInt(readlineSync.question('What is the production year of this film ?'))
    let castMembers = readlineSync.question('Which actors where in that film ?')
    let film = {name: name, productionYear: productionYear, castMembers: castMembers}
    console.log(film)
}
askTvSerie() */


/************************** Exercise 5.2 ***********************


 Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined
 in the previous exercise and return a list of the same cast but in a random order.

 Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie
 then display a randomized list of the previous cast that will form the new cast of your next serie. */

let askTvSerie = () =>
{
    let name = readlineSync.question('What is the film name ?')
    let productionYear = parseInt(readlineSync.question('What is the production year of this film ?'))
    let castMembers = readlineSync.question('Which actors where in that film ?')
    let film = {name: name, productionYear: productionYear, castMembers: castMembers}
    console.log(film)

    let randomizeCast = (film) =>
    {
        console.log(castMembers)
    }
    randomizeCast()
}
askTvSerie()


