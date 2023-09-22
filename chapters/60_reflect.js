/**
 * ========================================================
 * Reflect
 * ========================================================
 * The Reflect object provides various methods that encapsulate common JavaScript operations
 * in a more function-like syntax, making them interceptable and manipulable.
 */

/**
 * ========================================================
 * 1. Property Access using Reflect
 * ========================================================
 * Reflect allows property access similar to traditional JavaScript but in a more function-like syntax.
 * This is particularly useful when you're working with Proxy handlers.
 */
const person = {
    name: "Ishtmeet",
    age: 25,
};

// Using Reflect.get to access a property
const age = Reflect.get(person, "age");
console.log(`Age: ${age}`); // Output: Age: 25

// Using Reflect.set to modify a property
Reflect.set(person, "name", "Bob");
console.log(`Name: ${person.name}`); // Output: Name: Bob

/**
 * ========================================================
 * 2. Property Existence Checks
 * ========================================================
 * The Reflect.has method allows you to check if a property exists on an object.
 */
const hasAge = Reflect.has(person, "age");
console.log(`Has age property: ${hasAge}`); // Output: Has age property: true

/**
 * ========================================================
 * 3. Property Deletion
 * ========================================================
 * Reflect.deleteProperty allows for the deletion of properties in a function-like syntax.
 */
Reflect.deleteProperty(person, "age");
console.log(`Age property deleted: ${"age" in person}`); // Output: Age property deleted: false

/**
 * ========================================================
 * 4. Object Creation
 * ========================================================
 * Reflect.construct is used to create new instances of objects.
 * This can replace the 'new' keyword in certain scenarios.
 */
const newObj = Reflect.construct(Array, [1, 2, 3]);
console.log(newObj); // Output: [1, 2, 3]

/**
 * ========================================================
 * 5. Function Invocation
 * ========================================================
 * Reflect.apply allows for invoking functions with specified context and arguments.
 */
function greet(name) {
    return `Hello, ${name}!`;
}
const greeting = Reflect.apply(greet, null, ["Ishtmeet"]);
console.log(greeting); // Output: Hello, Ishtmeet!

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Error Handling
 * -----------------
 * Many Reflect methods return boolean values, allowing for built-in error handling.
 */
const success = Reflect.defineProperty(person, "name", { value: "Charlie" });
if (success) {
    console.log('Property "name" defined successfully.');
} else {
    console.error('Failed to define property "name".');
}

/**
 * 2. Property Enumeration
 * -----------------------
 * Reflect.ownKeys allows for easy enumeration of all object properties, both enumerable and non-enumerable.
 */
const propertyNames = Reflect.ownKeys(person);
console.log(`Property names: ${propertyNames}`); // Output: Property names: name

/**
 * 3. Object Extensibility Control
 * ------------------------------
 * Reflect.preventExtensions and Reflect.isExtensible allow you to control and check an object's extensibility.
 */
Reflect.preventExtensions(person);
console.log(`Is extensible: ${Reflect.isExtensible(person)}`); // Output: Is extensible: false

/**
 * 4. Proxy and Reflect
 * --------------------
 * Reflect methods can be used in Proxy handlers to provide custom behavior.
 * They complement each other especially well in meta-programming tasks.
 */
const handler = {
    get(target, prop) {
        return Reflect.get(target, prop);
    },
};
const proxyPerson = new Proxy(person, handler);
console.log(proxyPerson.name); // Output: Bob

/**
 * 5. Function Context and Arguments
 * --------------------------------
 * Reflect.apply allows you to specify both the function's context and its arguments array, providing more control over invocation.
 */
const context = {
    domain: "example.com",
};
function logDomain(name) {
    return `Hello, ${name} from ${this.domain}!`;
}
const contextualGreeting = Reflect.apply(logDomain, context, ["Ishtmeet"]);
console.log(contextualGreeting); // Output: Hello, Ishtmeet from example.com!
