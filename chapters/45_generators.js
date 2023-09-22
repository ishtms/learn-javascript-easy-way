/**
 * ========================================================
 * JavaScript Generators
 * ========================================================
 * Generators are special functions that allow you to pause and resume their execution,
 * preserving their internal state between pauses. This is particularly useful for things
 * like iteration, asynchronous operations, and more.
 *
 * Generators offer a unique way to handle iterative or asynchronous logic
 * in a cleaner, more manageable manner.
 */

/**
 * ========================================================
 * Defining a Generator Function
 * ========================================================
 * A generator function is defined using the 'function*' syntax.
 * When this function is called, it returns a generator object.
 */
function* myGenerator() {
    yield "apple";
    yield "banana";
    return "done";
}

/**
 * ========================================================
 * Creating a Generator Object
 * ========================================================
 * You must first call the generator function to create a generator object.
 * This object adheres to both the iterable and iterator protocols.
 */
const gen = myGenerator(); // Returns a generator object

/**
 * ========================================================
 * Iterating through a Generator
 * ========================================================
 * Use the next() method on the generator object to iterate through the generator function's yields.
 * Each call to next() returns an object with 'value' and 'done' properties.
 */
console.log(gen.next()); // Output: { value: 'apple', done: false }
console.log(gen.next()); // Output: { value: 'banana', done: false }
console.log(gen.next()); // Output: { value: 'done', done: true }

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * Generator as an Iterable
 * ------------------------
 * A generator object is also an iterable, which means it can be used in a 'for...of' loop.
 */
for (const fruit of myGenerator()) {
    console.log(fruit); // Output: 'apple', 'banana'
}

/**
 * yield* Expression
 * ----------------
 * The 'yield*' expression can be used to delegate to another generator function or iterable object.
 */
function* anotherGenerator() {
    yield* [1, 2, 3];
    yield* myGenerator();
}
for (const val of anotherGenerator()) {
    console.log(val); // Output: 1, 2, 3, 'apple', 'banana'
}

/**
 * Passing Values into Generators
 * ------------------------------
 * You can pass values back into a paused generator function using the next(value) method.
 */
function* counter() {
    let count = 0;
    while (true) {
        const increment = yield count;
        count += increment || 1;
    }
}
const cnt = counter();
console.log(cnt.next().value); // Output: 0
console.log(cnt.next(2).value); // Output: 2

/**
 * Error Handling
 * --------------
 * You can handle errors within a generator function using try-catch blocks.
 */
function* failSafeGenerator() {
    try {
        yield "OK";
        throw new Error("An error occurred");
    } catch (error) {
        yield "Recovered from error";
    }
}
const safeGen = failSafeGenerator();
console.log(safeGen.next().value); // Output: 'OK'
console.log(safeGen.next().value); // Output: 'Recovered from error'

/**
 * Asynchronous Generators
 * ------------------------
 * ES2018 introduced asynchronous generator functions, defined using 'async function*'.
 * They yield Promises and can be consumed using 'for await...of' loops.
 */
async function* asyncGenerator() {
    yield Promise.resolve("async value");
}
(async () => {
    for await (const val of asyncGenerator()) {
        console.log(val); // Output: 'async value'
    }
})();
