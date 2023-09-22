/**
 * ========================================================
 * WeakMap
 * ========================================================
 * A WeakMap is a collection of key-value pairs where the keys must be objects
 * and the values can be arbitrary values. WeakMaps hold "weak" references to the keys,
 * which means that they do not prevent garbage collection in case there are no other references to the object.
 */

/**
 * ========================================================
 * Initializing a WeakMap
 * ========================================================
 * WeakMaps are initialized using the `new WeakMap()` constructor.
 * You can also initialize it with an iterable of key-value pairs, where keys must be objects.
 */
const myWeakMap = new WeakMap([
    [{}, "firstValue"],
    [{}, "secondValue"],
]);

/**
 * ========================================================
 * Adding Elements
 * ========================================================
 * The set() method adds a new key-value pair into the WeakMap.
 * Remember, the key must be an object.
 */
const obj1 = {};
const obj2 = {};

myWeakMap.set(obj1, "obj1Value");
myWeakMap.set(obj2, "obj2Value");

/**
 * ========================================================
 * Accessing Values
 * ========================================================
 * The get() method retrieves the value associated with a given object key.
 */
console.log(myWeakMap.get(obj1)); // Output: 'obj1Value'

/**
 * ========================================================
 * Removing Elements
 * ========================================================
 * The delete() method removes the key-value pair associated with a given object key.
 */
myWeakMap.delete(obj1); // Will remove obj1 and its associated value

/**
 * ========================================================
 * Checking for Existence
 * ========================================================
 * The has() method checks if a WeakMap contains a specific key.
 */
console.log(myWeakMap.has(obj2)); // Output: true

/**
 * ========================================================
 * WeakMap Nuances and Limitations
 * ========================================================
 */

/**
 * No Iteration Support
 * --------------------
 * WeakMaps can't be iterated using methods like `forEach` or for...of loops.
 * This is because they are designed to be 'garbage-collection friendly' and do not have enumerable keys.
 */

/**
 * Garbage Collection
 * ------------------
 * WeakMaps don't prevent the keys from being garbage collected.
 * If there are no other references to the object, the garbage collector will remove it and its associated value from the WeakMap.
 */

/**
 * No Primitive Data Types as Keys
 * -------------------------------
 * Primitive data types (numbers, strings, etc.) cannot be used as keys.
 */

/**
 * No `size` Property
 * ------------------
 * Unlike Maps, WeakMaps do not have a `size` property.
 */

/**
 * No Clear Method
 * ---------------
 * WeakMaps do not have a `clear()` method to remove all key-value pairs.
 */

/**
 * Chainable Methods
 * -----------------
 * Methods like set() return the WeakMap object itself, allowing for chained calls.
 */
myWeakMap.set(obj2, "newValue").set(obj1, "obj1NewValue");
