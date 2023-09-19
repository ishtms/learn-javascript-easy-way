/**
 * ========================================================
 * Creating a Promise
 * ========================================================
 * The Promise constructor takes an executor function as an argument.
 * This function should have two parameters: 'resolve' and 'reject',
 * which are functions to be called when the promise is resolved or rejected.
 *
 * The 'resolve' function is used to transition the Promise from the 'pending' state
 * to the 'fulfilled' state, with a result value.
 *
 * The 'reject' function is used to transition the Promise from the 'pending' state
 * to the 'rejected' state, with an error or reason.
 */
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved"); // Transition to 'fulfilled'
        // reject(new Error("Something went wrong")); // Transition to 'rejected'
    }, 1000);
});

/**
 * ========================================================
 * Consuming a Promise
 * ========================================================
 * Use '.then()' for fulfilled promises and '.catch()' for rejected ones.
 * '.then()' takes a function that will be passed the resolved value.
 * '.catch()' takes a function that will be passed the rejection reason.
 */
myPromise
    .then((result) => {
        console.log(`Success: ${result}`);
    })
    .catch((error) => {
        console.log(`Error: ${error.message}`);
    });

/**
 * ========================================================
 * Chaining Promises
 * ========================================================
 * You can chain multiple '.then()' methods to handle a series of asynchronous tasks.
 * Each '.then()' returns a new promise, allowing for additional '.then()' and '.catch()' methods.
 */
fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(`Fetch failed: ${error}`);
    });

/**
 * ========================================================
 * Async/Await with Promises
 * ========================================================
 * The 'async' and 'await' keywords allow you to write asynchronous code
 * that looks more like traditional synchronous code.
 * 'await' can only be used inside an 'async' function and makes JavaScript
 * wait until the Promise settles and returns its result.
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
 * Promise.all() and Promise.race()
 * ========================================================
 * Promise.all() takes an array of promises and returns a single promise that resolves
 * when all of the promises have resolved or any one of them has rejected.
 *
 * Promise.race() takes an array of promises and returns a promise that settles
 * as soon as one of the promises in the array settles, either by being resolved or rejected.
 */
const promise1 = Promise.resolve("First promise");
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second promise resolved");
    }, 1000);
});

Promise.all([promise1, promise2])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error);
    });

Promise.race([promise1, promise2])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

/**
 * ========================================================
 * Unhandled Rejections
 * ========================================================
 * Always make sure to handle Promise rejections using `.catch()` or `try/catch` with async/await.
 * If you don't, Node.js or browsers will throw an UnhandledPromiseRejectionWarning.
 */
const unhandledPromise = new Promise((resolve, reject) => {
    reject(new Error("This rejection is unhandled."));
});
// The correct way to handle this would be unhandledPromise.catch(error => console.error(error));

/**
 * ========================================================
 * thenable Objects
 * ========================================================
 * An object with a `.then()` method is "thenable" and can be awaited using the `await` keyword.
 * This enables interoperability between different Promise-like libraries.
 */
const thenable = {
    then: function (resolve, reject) {
        resolve("I am a thenable");
    },
};
(async () => {
    console.log(await thenable); // Output: 'I am a thenable'
})();

/**
 * ========================================================
 * Settled Promises
 * ========================================================
 * A promise is considered "settled" if it's either fulfilled or rejected.
 * Use `.finally()` to execute code regardless of the promise state (resolved or rejected).
 */
const settledPromise = new Promise((resolve, reject) => {
    resolve("This promise will settle.");
});
settledPromise.finally(() => console.log("This will run irrespective of the promise state."));

/**
 * ========================================================
 * Error Handling
 * ========================================================
 * Using `.catch()` at the end of a Promise chain will catch all preceding errors.
 * However, errors occurring after a successful `.then()` are not caught unless there's another `.catch()`.
 */
Promise.resolve()
    .then(() => {
        throw new Error("Error in .then()");
    })
    .catch((error) => console.log("This will catch the error"))
    .then(() => {
        throw new Error("Another error");
    });
// Missing another .catch() here to catch the "Another error"

/**
 * ========================================================
 * Microtask Queue
 * ========================================================
 * Promise callbacks are part of the "microtask" queue, which has higher priority than the regular "task" queue.
 */
// Microtasks will run before any other tasks like setTimeout or setInterval.

/**
 * ========================================================
 * Cancellation
 * ========================================================
 * Native Promises don't support cancellation, but you can implement it manually by using flags or specialized libraries.
 */
// For example, using a flag to cancel a Promise operation is a workaround.

/**
 * ========================================================
 * Executor Code
 * ========================================================
 * Code inside the executor function is synchronous.
 * Be cautious when placing large computational tasks there, as it can block the event loop.
 */
// Not advisable to put heavy synchronous operations in the executor.

/**
 * ========================================================
 * Return vs Resolve in .then()
 * ========================================================
 * Inside a `.then()` block, `return x` and `return Promise.resolve(x)` may appear similar but they are not identical.
 * `return Promise.resolve(x)` allows you to return another promise and can be useful for chaining.
 */
Promise.resolve()
    .then(() => {
        return "Direct return";
    })
    .then((value) => console.log(value)); // Output: 'Direct return'

Promise.resolve()
    .then(() => {
        return Promise.resolve("Promise return");
    })
    .then((value) => console.log(value)); // Output: 'Promise return'
