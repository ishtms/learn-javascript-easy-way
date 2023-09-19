/**
 * ========================================================
 * Asynchronous Programming
 * ========================================================
 * JavaScript's single-threaded nature is augmented by asynchronous features
 * like callbacks, promises, and async/await for non-blocking operations.
 */

/**
 * ========================================================
 * Callbacks
 * ========================================================
 * Callbacks are functions passed as arguments to be executed later.
 * They are the foundational concept for handling asynchronous operations.
 */
setTimeout(() => {
    console.log("This runs after 1000 ms");
}, 1000);

/**
 * ========================================================
 * Callback Hell (Pyramid of Doom)
 * ========================================================
 * This is an anti-pattern with nested callbacks, making the code hard to read and maintain.
 * The issue can be mitigated using promises or async/await.
 */
fs.readFile("file1.txt", (err, data1) => {
    fs.readFile("file2.txt", (err, data2) => {
        // ...and so on
    });
});

/**
 * ========================================================
 * Promises
 * ========================================================
 * See the `promises()` section for an in-depth explanation.
 * Promises offer a cleaner and more flexible way to handle asynchronous operations.
 */

/**
 * ========================================================
 * Async/Await
 * ========================================================
 * Introduced in ES2017, this syntactic sugar makes it easier to write asynchronous code in a synchronous style.
 */
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Fetch failed: ${error}`);
    }
}

/**
 * ========================================================
 * Nuances with Examples
 * ========================================================
 */

/**
 * 1. Event Loop and Message Queue
 * --------------------------------
 * The Event Loop continually checks the message queue and pushes any pending callbacks onto the call stack
 * as soon as it's empty. This behavior is crucial in understanding the order of code execution.
 */
// Here setTimeout runs after console.log('end') even if the delay is 0 milliseconds.
console.log("start");
setTimeout(() => {
    console.log("middle");
}, 0);
console.log("end");

/**
 * 2. Microtasks vs Macrotasks
 * ---------------------------
 * Microtasks include Promise resolutions, and process.nextTick. Macrotasks include setTimeout, setInterval, etc.
 * Microtasks run immediately after the current script and before the control is given back to the event loop.
 */
// Promise callbacks are microtasks, so they run before setTimeout which is a macrotask.
Promise.resolve().then(() => console.log("Promise"));
setTimeout(() => console.log("setTimeout"));

/**
 * 3. Implicit Promise Return from Async Functions
 * -----------------------------------------------
 * An `async` function implicitly returns a Promise, and the resolve value of that Promise is what you return from the function.
 */
async function myFunc() {
    return "hello";
}
myFunc().then(console.log); // Output: hello

/**
 * 4. Uncaught Promise Rejections
 * ------------------------------
 * Failing to handle promise rejections will terminate Node.js processes and throw warnings in browsers.
 */
// Always handle Promise rejections to avoid unexpected application crashes.
new Promise((_, reject) => reject(new Error("Oops!"))); // UnhandledPromiseRejectionWarning

/**
 * 5. Blocking Nature of Await
 * ---------------------------
 * The `await` keyword pauses code execution within the async function, making it look like a blocking operation.
 */
// The following line won't run until fetchData() has completed.
async function example() {
    const data = await fetchData();
    console.log(data);
}

/**
 * 6. Error Handling in Async/Await
 * --------------------------------
 * Errors in an async function can be caught using try/catch blocks.
 * Alternatively, you can still use Promise chaining with `.catch()` to handle errors.
 */
async function exampleWithErrorHandling() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log("An error occurred", error);
    }
}
