function _setTimeout() {
    /**
     * ========================================================
     * Basic Syntax and Usage of setTimeout
     * ========================================================
     * The setTimeout method allows you to schedule code execution after
     * a specified delay. The delay is not guaranteed but approximate, due to
     * the single-threaded nature of JavaScript.
     *
     * Syntax: setTimeout(callback, delayInMilliseconds, ...additionalArguments)
     * - callback: The function that will be executed after the delay.
     * - delayInMilliseconds: The delay in milliseconds.
     * - ...additionalArguments: Optional arguments that are passed to the callback.
     */
    setTimeout(() => {
        console.log("Basic Usage: This message will appear after approximately 1 second.");
    }, 1000);

    /**
     * ========================================================
     * Canceling a Scheduled Timeout
     * ========================================================
     * The setTimeout function returns a TimeoutID, which can be used to cancel
     * the timeout using clearTimeout method.
     */
    const timeoutID = setTimeout(() => {
        console.log("This message will never appear.");
    }, 2000);
    clearTimeout(timeoutID);

    /**
     * ========================================================
     * Passing Parameters to the Callback
     * ========================================================
     * setTimeout allows passing additional arguments to the callback function.
     * These arguments follow the delay parameter in the function signature.
     */
    setTimeout(
        (param1, param2) => {
            console.log(`Passed Parameters: ${param1}, ${param2}`);
        },
        1500,
        "Parameter1",
        "Parameter2"
    );

    /**
     * ========================================================
     * Handling 'this' Context within setTimeout
     * ========================================================
     * If you're using an arrow function as the callback, the value of 'this'
     * will be inherited from the enclosing scope.
     *
     * For regular functions, the 'this' value will be either the window object
     * (in a browser) or undefined (in strict mode).
     */
    const exampleObject = {
        name: "Ishtmeet",
        greet: function () {
            setTimeout(() => {
                console.log(`Hello, ${this.name}`);
            }, 500);
        },
    };
    exampleObject.greet(); // Output: "Hello, Ishtmeet"

    /**
     * ========================================================
     * Nuances and Edge Cases
     * ========================================================
     * 1. Zero Delay: Even if you set zero milliseconds as the delay, the actual
     *    execution may take longer because the callback enters the event queue.
     * 2. Maximum Delay: Delay can't exceed 2147483647 milliseconds (~24.8 days).
     *    Any value longer will be truncated.
     */
    setTimeout(() => {
        console.log("Zero delay doesn't mean immediate execution.");
    }, 0);

    setTimeout(() => {
        console.log("This message will display after 1 millisecond, not 25 days.");
    }, 2147483648);
}

_setTimeout();
