// Function to explore the intricacies and features of setInterval
function _setInterval() {
    /**
     * ========================================================
     * Basic Syntax and Usage of setInterval
     * ========================================================
     * The setInterval method schedules repeated execution of code
     * at specific intervals. Just like setTimeout, the actual intervals are approximate.
     *
     * Syntax: setInterval(callback, intervalInMilliseconds, ...additionalArguments)
     * - callback: The function that will be executed at each interval.
     * - intervalInMilliseconds: The interval time in milliseconds.
     * - ...additionalArguments: Optional arguments that are passed to the callback.
     */
    const basicIntervalID = setInterval(() => {
        console.log("Basic Usage: This message will repeat every 2 seconds.");
    }, 2000);

    // To stop the above basic example after 6 seconds
    setTimeout(() => {
        clearInterval(basicIntervalID);
    }, 6000);

    /**
     * ========================================================
     * Canceling a Scheduled Interval
     * ========================================================
     * The setInterval function returns an IntervalID, which can be used to cancel
     * the interval using the clearInterval method.
     */
    const cancelableIntervalID = setInterval(() => {
        console.log("This message will display only once.");
    }, 3000);
    clearInterval(cancelableIntervalID);

    /**
     * ========================================================
     * Passing Parameters to the Callback
     * ========================================================
     * setInterval allows passing additional arguments to the callback function.
     * These arguments follow the interval parameter in the function signature.
     */
    setInterval(
        (param1, param2) => {
            console.log(`Passed Parameters: ${param1}, ${param2}`);
        },
        4000,
        "Parameter1",
        "Parameter2"
    );

    /**
     * ========================================================
     * Handling 'this' Context within setInterval
     * ========================================================
     * The rules for the 'this' context within the callback function are similar
     * to those in setTimeout. Arrow functions inherit 'this' from the surrounding
     * code, while regular functions don't.
     */
    const exampleObject = {
        name: "Bob",
        greet: function () {
            setInterval(() => {
                console.log(`Hello, ${this.name}`);
            }, 5000);
        },
    };
    exampleObject.greet(); // Output: "Hello, Bob"

    /**
     * ========================================================
     * Nuances and Edge Cases
     * ========================================================
     * 1. Zero Interval: Even with zero milliseconds as the interval, the actual
     *    execution may not be immediate due to JavaScript's single-threaded nature.
     * 2. Maximum Interval: The maximum length is 2147483647 milliseconds (~24.8 days),
     *    similar to setTimeout.
     */
    setInterval(() => {
        console.log("Zero interval doesn't mean immediate repetition.");
    }, 0);
}

// Run the exploreSetInterval function to observe the behavior of setInterval
_setInterval();
