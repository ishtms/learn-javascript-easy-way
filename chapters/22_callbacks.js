/**
 * ========================================================
 * Basic Callback Example
 * ========================================================
 * Callbacks are functions passed as arguments to other functions.
 * They are executed after the completion of that function’s task.
 * Below is a simple example of using a callback to run code after a delay.
 */
function delayedGreeting(callback) {
    setTimeout(() => {
        console.log("Hello, world!");
        callback();
    }, 1000);
}

delayedGreeting(() => {
    console.log("This runs after the greeting.");
});

/**
 * ========================================================
 * Asynchronous Operations
 * ========================================================
 * Callbacks are essential for handling asynchronous operations like reading files,
 * making HTTP requests, or querying databases. This allows the program to continue
 * executing other tasks without waiting for the asynchronous operation to complete.
 */
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
        console.error("There was an error reading the file:", err);
        return;
    }
    console.log(data);
});

/**
 * ========================================================
 * Callback Hell (Pyramid of Doom)
 * ========================================================
 * A common problem when using callbacks is "callback hell," also known as the "pyramid of doom."
 * This occurs when you have too many nested callbacks, making the code harder to read and maintain.
 * Modern solutions like Promises and async/await aim to solve this issue.
 */
function step1(callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
        console.log("Step 1 complete");
        callback();
    }, 500);
}

function step2(callback) {
    // Simulating another asynchronous operation
    setTimeout(() => {
        console.log("Step 2 complete");
        callback();
    }, 500);
}

step1(() => {
    step2(() => {
        console.log("All steps complete");
        // More nested callbacks could follow
    });
});

/**
 * ========================================================
 * Error-First Callbacks
 * ========================================================
 * In Node.js, a common pattern is to have the first parameter of a callback function
 * be an error object. If an error occurs, this object will be populated. Otherwise, it will be null.
 */
function doSomethingAsync(callback) {
    // Simulating an asynchronous operation that results in an error
    setTimeout(() => {
        const err = new Error("Something went wrong");
        callback(err, null);
    }, 1000);
}

doSomethingAsync((err, result) => {
    if (err) {
        console.error("Error:", err);
        return;
    }
    console.log("Result:", result);
});

/**
 * ========================================================
 * Handling Multiple Callbacks (Node.js specific)
 * ========================================================
 * You may encounter situations where multiple callbacks can be registered for a single event.
 * For example, event emitters allow registering multiple listeners/callbacks.
 * Here is a simple example using Node.js' events module.
 */
const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// Register multiple listeners for the same event
myEmitter.on("event", () => {
    console.log("Event listener 1 fired");
});

myEmitter.on("event", () => {
    console.log("Event listener 2 fired");
});

// Emit the event, triggering all registered listeners
myEmitter.emit("event");

/**
 * ========================================================
 * Don't Forget to Invoke the Callback
 * ========================================================
 * Forgetting to call the callback can lead to hanging or unresponsive code.
 * Always make sure the callback is invoked under the correct conditions.
 */
function mightForgetCallback(callback) {
    // Some logic here
    // ...
    // Oops! Forgot to call callback() causing any code relying on it to never run.
}

/**
 * ========================================================
 * Always Check for Errors
 * ========================================================
 * In error-first callbacks, always make it a point to check for errors before proceeding.
 * This allows for better error handling and graceful failure.
 */
function doSomethingWithErrorFirstCallback(callback) {
    const err = new Error("Something went wrong");
    if (err) {
        callback(err);
        return;
    }
    // Do something if no error
}

/**
 * ========================================================
 * Callback Scope
 * ========================================================
 * The 'this' context inside a callback might not be what you expect.
 * It can change based on how the function is called.
 */
const obj = {
    methodWithCallback: function (callback) {
        // Here, 'this' is 'obj'
        callback();
    },
};

obj.methodWithCallback(function () {
    // Here, 'this' is not 'obj', it's the global context
    // or undefined in strict mode.
});

/**
 * ========================================================
 * Multiple Invocations
 * ========================================================
 * Ensure that the callback is not invoked more than once within a function.
 * Calling a callback multiple times can lead to unexpected results.
 */
function badExample(callback) {
    // Incorrectly calling the callback twice
    callback();
    callback();
}

/**
 * ========================================================
 * Callback After Return
 * ========================================================
 * If you invoke a callback after a 'return' statement inside a 'try' block,
 * the 'catch' block won't catch any errors thrown in the callback.
 */
function dangerousExample(callback) {
    try {
        return; // exiting the function
        callback(); // this will never be reached
    } catch (error) {
        // errors in callback would not be caught here
    }
}

/**
 * ========================================================
 * Synchronous Callbacks
 * ========================================================
 * Callbacks can also be synchronous, but mixing them with asynchronous callbacks
 * can create confusing behavior. Be consistent.
 */
function synchronousCallbackExample(callback) {
    // This is a synchronous callback
    callback();
}

/**
 * ========================================================
 * Event Loop
 * ========================================================
 * Understanding the event loop is crucial for mastering asynchronous operations.
 * Callbacks are queued in the Event Loop to be executed after the main thread has finished execution.
 */

/**
 * ========================================================
 * Arrow Functions and 'this'
 * ========================================================
 * If you use arrow functions as callbacks, they don't have their own 'this' value but inherit it from the parent scope.
 * Depending on your needs, this could be either beneficial or problematic.
 */
const anotherObj = {
    value: "I am anotherObj",
    method: function (callback) {
        callback();
    },
};

anotherObj.method(() => {
    // 'this' is lexically bound, it remains as it was where the arrow function was defined
    // Will not refer to 'anotherObj'
});
