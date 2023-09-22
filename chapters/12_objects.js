function objects() {
    /**
     * ========================================================
     * Object Literals
     * ========================================================
     * An object literal is the simplest way to create an object.
     * Objects can have properties and methods (functions as properties).
     */
    const person = {
        name: "Ishtmeet",
        age: 30,
        greet() {
            return `Hello, ${this.name}`;
        },
    };
    console.log(person.greet()); // Outputs: "Hello, Ishtmeet"

    /**
     * ========================================================
     * Accessing Properties
     * ========================================================
     * Properties can be accessed using dot notation or bracket notation.
     * Dot notation is more readable and is generally used when the property name is known ahead of time.
     */
    console.log(person.name); // Dot notation
    console.log(person["age"]); // Bracket notation

    /**
     * ========================================================
     * Adding & Updating Properties
     * ========================================================
     * New properties can be added and existing properties can be updated.
     * This showcases the dynamic nature of JavaScript objects.
     */
    person.email = "ishtmeet@example.com";
    person["age"] = 31;
    console.log(person); // Outputs updated object

    /**
     * ========================================================
     * Deleting Properties
     * ========================================================
     * The `delete` keyword is used to remove properties from an object.
     * Note that this operation is not reversible.
     */
    delete person.email;
    console.log(person); // Outputs object without 'email' property

    /**
     * ========================================================
     * Object Constructor
     * ========================================================
     * The `new Object()` constructor is another way to create an object.
     * While less commonly used than object literals, it is equally powerful.
     */
    const car = new Object();
    car.brand = "Tesla";
    car.model = "Model S";
    console.log(car); // Outputs the car object

    /**
     * ========================================================
     * Object Methods
     * ========================================================
     * Methods are functions that are stored as object properties.
     */
    car.describe = function () {
        return `${this.brand} ${this.model}`;
    };
    console.log(car.describe()); // Outputs: "Tesla Model S"

    /**
     * ========================================================
     * Object Destructuring
     * ========================================================
     * Destructuring allows you to extract properties into variables.
     * This feature was introduced in ES6 and is often used for better readability.
     */
    const { name, age } = person;
    console.log(name, age); // Outputs: "Ishtmeet 31"

    /**
     * ========================================================
     * Looping Over Properties
     * ========================================================
     * The `for...in` loop can iterate through object keys.
     * It is a good practice to use `hasOwnProperty()` to filter out properties from the prototype chain.
     */
    for (const key in person) {
        if (person.hasOwnProperty(key)) {
            console.log(`${key}: ${person[key]}`);
        }
    }

    /**
     * ========================================================
     * Checking Property Existence
     * ========================================================
     * There are multiple ways to check for property existence.
     * `in` checks for own and inherited properties, `.hasOwnProperty()` checks for own properties.
     */
    console.log("name" in person); // Outputs: true
    console.log(person.hasOwnProperty("email")); // Outputs: false

    /**
     * ========================================================
     * Object Spread Operator
     * ========================================================
     * The spread operator can clone or merge objects.
     * It is a quick and easy way to perform these operations but only does shallow cloning.
     */
    const clonePerson = { ...person };
    console.log(clonePerson); // Outputs a clone of 'person'

    /**
     * ========================================================
     * Object.assign()
     * ========================================================
     * `Object.assign()` method can also be used to clone or merge objects.
     * It provides more control and is generally used for more complex operations.
     */
    const anotherClone = Object.assign({}, person);
    console.log(anotherClone); // Outputs another clone of 'person'

    /**
     * ========================================================
     * Object.freeze(), Object.seal()
     * ========================================================
     * These methods control object mutability.
     * `Object.freeze()` makes an object immutable.
     * `Object.seal()` prevents new properties from being added and existing ones from being deleted, but allows value modification.
     */
    Object.freeze(person);
    person.age = 32; // Won't work because the object is frozen
    console.log(person.age); // Outputs: "31"
}

objects();
