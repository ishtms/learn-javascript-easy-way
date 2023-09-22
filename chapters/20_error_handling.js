/**
 * Error handling allows you to gracefully handle exceptions and continue the program's execution.
 */
function errorHandling() {
    /**
     * ========================================================
     * Basic Try-Catch
     * ========================================================
     * The try-catch block allows you to execute code within the "try" block.
     * If an exception occurs, the code inside the "catch" block gets executed.
     */
    try {
        // Code that could possibly throw an error goes here
        const x = JSON.parse('{"name": "Ishtmeet"}');
    } catch (e) {
        // Code to execute if an exception occurs in the try block
        console.error("An error occurred:", e);
    }

    /**
     * ========================================================
     * The Finally Block
     * ========================================================
     * The "finally" block will execute after both the try and catch blocks, regardless of whether an exception was thrown.
     * It's often used for cleanup tasks like releasing resources.
     */
    try {
        // Code that could possibly throw an error
    } catch (e) {
        // Code to execute if an exception occurs
    } finally {
        // This code will execute regardless of whether an exception occurred or not
        console.log("Finally block executed");
    }

    /**
     * ========================================================
     * Throwing Exceptions
     * ========================================================
     * You can programmatically throw exceptions using the 'throw' keyword.
     * Thrown exceptions can be of any type, but using the Error object is often more descriptive.
     */
    try {
        throw new Error("This is a custom error");
    } catch (e) {
        console.error("Caught a custom error:", e);
    }

    /**
     * ========================================================
     * Nuance: Catching Multiple Error Types
     * ========================================================
     * In complex applications, multiple types of errors can occur.
     * You can use 'instanceof' or other properties to distinguish between them.
     */
    try {
        // Code that could throw multiple types of exceptions
        throw new SyntaxError("A syntax error for demonstration purposes");
    } catch (e) {
        if (e instanceof TypeError) {
            console.error("Type Error:", e);
        } else if (e instanceof SyntaxError) {
            console.error("Syntax Error:", e);
        } else {
            console.error("Unknown error:", e);
        }
    }

    /**
     * ========================================================
     * Nuance: Catch Without Variable
     * ========================================================
     * JavaScript allows catch blocks without specifying the error variable.
     * However, this isn't recommended as you lose the error details, making debugging difficult.
     */
    try {
        throw new Error("Some error");
    } catch {
        console.error("An error occurred, but we're not displaying it");
    }

    /**
     * ========================================================
     * Nuance: Optional Catch Binding
     * ========================================================
     * ECMAScript 2019 onwards permits the use of catch blocks without an error variable.
     * While syntactically valid, this is generally not advised unless you have a very specific reason.
     */
    try {
        // some code that might throw an error
    } catch {
        // handle the error without capturing its details
    }

    /**
     * ========================================================
     * Bonus: Re-Throwing Errors
     * ========================================================
     * Sometimes, you might catch an error to log or modify it, but then want the error to propagate up.
     * You can "re-throw" the error after catching it.
     */
    try {
        throw new Error("An error to be re-thrown");
    } catch (e) {
        console.error("Logging the error before re-throwing:", e);
        throw e; // Re-throw the error
    }
}

errorHandling();
