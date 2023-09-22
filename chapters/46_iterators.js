/**
 * ========================================================
 * JavaScript Iterators
 * ========================================================
 * Iterators are a mechanism to traverse through collections (go through each item in a collection one by one),
 * such as arrays, strings, and more advanced data structures that we just discussed - like maps and sets.
 */

/**
 * ========================================================
 * The Iterator Protocol
 * ========================================================
 * The iterator protocol in JavaScript requires that you implement a 'next()' method.
 * This method must return an object with 'value' and 'done' properties.
 *
 * The next() method serves as the core of the Iterator Protocol. It should fulfill the following conditions:
 *
 *  -> Return an Object: It must return an object.
 *
 *  -> Object Properties: The returned object should have two properties:
 *    1. value: Holds the value of the current iteration.
 *    2. done: A Boolean value that is true if the iterator is past the end of the iterated sequence.
 *
 * In JavaScript, it is conventional to return {value: undefined, done: true} when the sequence is exhausted.
 */
const arrayIterator = ["a", "b", "c"][Symbol.iterator]();

console.log(arrayIterator.next()); // Output: { value: 'a', done: false }
console.log(arrayIterator.next()); // Output: { value: 'b', done: false }
console.log(arrayIterator.next()); // Output: { value: 'c', done: false }
console.log(arrayIterator.next()); // Output: { value: undefined, done: true }

/**
 * ========================================================
 * Custom Iterators
 * ========================================================
 * You can make your own iterable objects by defining a [Symbol.iterator] method.
 * This method should return an object containing a 'next' method.
 */
const customIterable = {
    [Symbol.iterator]: function () {
        let count = 0;
        return {
            next: function () {
                count++;
                if (count <= 3) {
                    return { value: count, done: false };
                }
                return { value: undefined, done: true };
            },
        };
    },
};

// Using the custom iterable in a for...of loop
for (const item of customIterable) {
    console.log(item); // Output: 1, 2, 3
}

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * Iterating Over Arguments
 * ------------------------
 * JavaScript's 'arguments' object is array-like but not an actual array.
 * You can make it iterable using Array.from() method.
 */
function argumentsIterator() {
    const argsArray = Array.from(arguments);
    for (const arg of argsArray) {
        console.log(arg);
    }
}
argumentsIterator(1, 2, 3); // Output: 1, 2, 3

/**
 * String Iterators
 * ----------------
 * Strings are iterable by default. When you iterate over a string,
 * each iteration returns a single character.
 */
for (const char of "hello") {
    console.log(char); // Output: 'h', 'e', 'l', 'l', 'o'
}

/**
 * Iterating Over Maps and Sets
 * ----------------------------
 * Map and Set objects have their built-in iterators, which makes it easier to iterate through them.
 */
const mySet = new Set([1, 2, 3]);
const setIter = mySet[Symbol.iterator]();
console.log(setIter.next().value); // Output: 1

const myMap = new Map([
    ["a", 1],
    ["b", 2],
]);
const mapIter = myMap[Symbol.iterator]();
console.log(mapIter.next().value); // Output: ['a', 1]

/**
 * Iterator Return and Throw Methods
 * ---------------------------------
 * Besides the 'next()' method, iterators can optionally implement 'return' and 'throw' methods.
 * These can be used to release internal resources when an iterator is no longer in use,
 * or to propagate errors during iteration, respectively.
 */
const advancedIterator = {
    [Symbol.iterator]: function () {
        return {
            next() {
                return { value: "some_value", done: false };
            },
            return() {
                console.log("Exiting early");
                return { done: true };
            },
            throw(error) {
                console.log("An error occurred:", error);
                return { done: true };
            },
        };
    },
};
