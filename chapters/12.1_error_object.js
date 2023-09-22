/**
 * ========================================================
 * Error Object in JavaScript
 * ========================================================
 * The Error object is a built-in object in JavaScript that provides information about errors that occur while
 * a script is running. It's a way to handle both custom and system-generated exceptions.
 */

/**
 * ========================================================
 * Creating a Simple Error
 * ========================================================
 * You can create an instance of the Error object using the Error constructor.
 */

const simpleError = new Error("Something went wrong");

/**
 * The Error object contains a message property that describes the error. The above code creates a new error object
 * with the message "Something went wrong".
 */

/**
 * ========================================================
 * Throwing Errors
 * ========================================================
 * Throwing errors halts the normal execution of code and directs the flow to the nearest catch block.
 */

function throwError() {
    throw new Error("An error occurred");
}

try {
    throwError();
} catch (error) {
    console.error(error.message);
}

/**
 * Here, the function 'throwError' throws an error, which is caught by the catch block. The message is then logged
 * to the console.
 */

/**
 * ========================================================
 * Handling Errors with Try-Catch
 * ========================================================
 * The try-catch statement allows you to handle errors gracefully without breaking your entire code.
 */

try {
    // Potentially error-prone code
    const sum = add(5, "ten");
} catch (error) {
    console.error("An error occurred:", error.message);
}

/**
 * The 'add' function is supposed to be a numerical addition, but a string is passed instead. This would typically
 * result in an error, but the catch block catches it and prints the error message.
 */

/**
 * ========================================================
 * Custom Errors
 * ========================================================
 * You can create custom error types by extending the Error class to handle specific kinds of errors.
 */

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// Usage
try {
    throw new ValidationError("Invalid input");
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Custom error caught: ${error.message}`);
    } else {
        console.error(`Unknown error: ${error.message}`);
    }
}

/**
 * The custom 'ValidationError' class extends the native Error class. It can be thrown and caught just like any
 * other error but allows for more specific error handling.
 */

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Stack Trace
 * ---------------
 * The stack trace is a property of the Error object that provides information about the function calls leading up to
 * the error.
 */

try {
    throw new Error("An error occurred");
} catch (error) {
    console.error(error.stack);
}

/**
 * Output: This will display the error message along with the function calls that led to this error.
 * It can be immensely helpful for debugging.
 */

/**
 * 2. Catching Multiple Error Types
 * ---------------------------------
 * You can catch and handle multiple types of errors using instanceof in a catch block.
 */

try {
    // Potentially error-prone code
} catch (error) {
    if (error instanceof TypeError) {
        console.error("Type Error:", error.message);
    } else if (error instanceof ReferenceError) {
        console.error("Reference Error:", error.message);
    }
}

/**
 * Output: Depending on the type of error thrown, a specific error message will be logged.
 */

/**
 * 3. Error Handling with Promises
 * -------------------------------
 * Errors can be caught in a Promise chain using the 'catch' method.
 */

fetch("invalid_url")
    .then((response) => response.json())
    .catch((error) => console.error("Fetch Error:", error.message));

/**
 * Output: 'Fetch Error:' followed by the error message will be displayed, indicating that the fetch operation failed.
 */

/**
 * 4. Finally Block
 * -----------------
 * The 'finally' block will be executed regardless of whether an error was thrown or not.
 */

try {
    // Code that may throw an error
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Cleanup code");
}

/**
 * Output: If an error occurs, the error message will be logged. The 'Cleanup code' message will always be logged
 * afterwards.
 */

/**
 * 5. Async/Await Error Handling
 * -----------------------------
 * With async/await, you can use try/catch just like you would with synchronous code.
 */

async function fetchData() {
    try {
        const response = await fetch("some_url");
        const data = await response.json();
    } catch (error) {
        console.error("Fetch Error:", error.message);
    }
}

/**
 * Output: If an error occurs during the fetch operation, 'Fetch Error:' followed by the error message will be logged.
 */
