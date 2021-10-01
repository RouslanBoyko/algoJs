/**************** 6.1 ******************************* */

// Test the class: Display in the console two instances of the class Cat: Skitty, 9 years and Pixel, 6 years.

    /*
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let skitty = new Cat("skitty", 9)
let pixel = new Cat("Pixel" , 6)

console.log(skitty ,pixel) */

/**************** 6.2 ******************************* */

/*
Create a Person class.
It will have two properties, firstname and lastname, and method sayHello, which will return "Hello, [firstname] [lastname]!".

Test the class: Create an instance of the Person class and return the value of the sayHello method inside the console. */

/*
class Person
{
    constructor(firstname , lastname)
    {
        this.firstname = firstname
        this.lastname = lastname
        let sayHello = (firstname,lastname) =>
        {
            console.log(`Hello ${this.firstname} ${this.lastname}`)
        }
        return sayHello()
    }
}

let rouslan = new Person("Rouslan" , "Boyko") */


/**************** 6.3 ******************************* */

/* In the code below, there is a prewritten class named: Animal.
From this class, create the two classes, Cat and Dog.
They will each have two properties, name and greeting (the second property must be static).
Test the class: Create an instance of the Dog class and an instance of the Cat class and display the return value of the sayHello method
inside the console.
 */
/*
class Animal {
    constructor (name) {
        this.name = name
        this.greeting = "Hello"
    }
    sayHello() {
        return `${this.greeting}! I'm ${this.name}!`;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    sayHello() {
        return super.sayHello()
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }
    sayHello() {
        return super.sayHello()
    }
}
*/
/**************** 6.4 ******************************* */
/* Create a class named Person. It will have two properties, firstname and lastname, as well as a getter name, which will return "[firstname] [lastname]",
and a setter name, which will divide the full name on the basis of a space:
the first element will be the firstname, the second the lastname.
Test the class: Create an instance of the Person class and display the value of the name inside the console,
then assigns a new value to it and displays the state of the instance inside the console at the end of the process.

 */
/*
let person = new Person("Rouslan", "Boyko")
console.log(`Old person : ${person.getName()}`)
console.log(person.setName("test test"))
console.log(`New person : ${person.getName()}`) */