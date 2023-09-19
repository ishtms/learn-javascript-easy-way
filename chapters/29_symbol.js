/**
 * ========================================================
 * Symbol
 * ========================================================
 * Symbols are a unique, immutable primitive data type in JavaScript.
 * They are often used as unique keys for object properties, helping prevent property name collisions
 * and enabling more robust data structures like maps and sets.
 */

/**
 * ========================================================
 * 1. Creating a Symbol
 * ========================================================
 * Create a Symbol using the `Symbol()` function. You can optionally provide a string description,
 * which can make debugging easier but does not affect the uniqueness.
 */
const symbol1 = Symbol();
const symbol2 = Symbol("description"); // With a description for debugging

/**
 * ========================================================
 * 2. Symbols Are Unique
 * ========================================================
 * Every symbol is unique, even if you give them the same description.
 */
const symbol3 = Symbol("description");
console.log(symbol2 === symbol3); // Output: false

/**
 * ========================================================
 * 3. Symbols as Object Properties
 * ========================================================
 * Symbols can be used as object property keys, and these properties won't clash with string keys
 * or be iterated over in a normal loop.
 */
const obj = {};
obj[symbol1] = "value1";
obj[symbol2] = "value2";
console.log(obj[symbol1]); // Output: 'value1'

/**
 * ========================================================
 * 4. Iteration and Enumeration
 * ========================================================
 * Symbols are not enumerable. They won't appear in for...in loops or be returned by Object.keys().
 */
for (let key in obj) {
    console.log(key); // No output
}
console.log(Object.keys(obj)); // Output: []

/**
 * ========================================================
 * 5. Retrieving Symbol Properties
 * ========================================================
 * To get an array of an object's own symbol properties, use Object.getOwnPropertySymbols().
 */
const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols); // Output: [Symbol(), Symbol(description)]

/**
 * ========================================================
 * Nuances and Best Practices
 * ========================================================
 */

/**
 * 1. Symbol.for() and Symbol.keyFor()
 * -----------------------------------
 * Symbols can be registered to a global registry and later retrieved. This enables symbol reuse across modules.
 */
const globalSymbol = Symbol.for("globalSymbol");
console.log(Symbol.keyFor(globalSymbol)); // Output: 'globalSymbol'

/**
 * 2. Well-known Symbols
 * ----------------------
 * JavaScript has built-in, well-known symbols that can be used to alter object behavior.
 */
// For instance, Symbol.iterator allows you to customize object iteration.
Array.prototype[Symbol.iterator];
// Symbol.hasInstance allows overriding the instanceof operator
Symbol.hasInstance;
// Symbol.isConcatSpreadable customizes array concatenation behavior
Symbol.isConcatSpreadable;

/**
 * 3. Symbol and Computed Property Names
 * -------------------------------------
 * Symbols can be used as computed property names in object literals.
 */
const dynamicObj = {
    [Symbol("dynamicProperty")]: "I am dynamic",
};
// Note: Accessing dynamicObj with Symbol('dynamicProperty') would be undefined because each symbol is unique.
console.log(dynamicObj[Symbol("dynamicProperty")]); // Output: undefined

/**
 * 4. Coercion
 * -----------
 * Symbols cannot be implicitly coerced into strings or numbers, doing so will result in a TypeError.
 */
// console.log(`Symbol: ${symbol1}`); // Throws TypeError
console.log(`Symbol: ${String(symbol1)}`); // Explicit coercion works

/**
 * 5. Symbols and Private Properties
 * ---------------------------------
 * Symbols are often used to simulate private properties in JavaScript objects. However, they are not truly private.
 */

/**
 * 6. Symbol Properties are Skipped by JSON.stringify()
 * -----------------------------------------------------
 * When using JSON.stringify(), symbol-keyed properties are omitted, making Symbols non-serializable into JSON format.
 */
console.log(JSON.stringify(obj)); // Output: {}
