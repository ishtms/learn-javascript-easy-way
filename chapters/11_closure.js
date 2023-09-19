function closures() {
    /**
     * ========================================================
     * Basic Closure
     * ========================================================
     * A closure is an inner function that has access to the outer function's variables.
     * It encapsulates the lexical environment, allowing the inner function to access variables from the outer function.
     */
    function outerFunction(outerVariable) {
        function innerFunction(innerVariable) {
            // innerFunction is a closure because it captures outerVariable.
            console.log(`Outer variable: ${outerVariable}`);
            console.log(`Inner variable: ${innerVariable}`);
        }
        return innerFunction;
    }
    const newFunction = outerFunction("outer");
    newFunction("inner"); // Outputs: "Outer variable: outer" and "Inner variable: inner"

    /**
     * ========================================================
     * Data Encapsulation and Private Variables
     * ========================================================
     * Closures can encapsulate variables, effectively making them private.
     * This allows for data privacy and modularity.
     */
    function counter() {
        let count = 0;
        return {
            increment: function () {
                count++;
                return count;
            },
            decrement: function () {
                count--;
                return count;
            },
        };
    }
    const myCounter = counter();
    console.log(`Counter: ${myCounter.increment()}`); // Outputs: "Counter: 1"
    console.log(`Counter: ${myCounter.increment()}`); // Outputs: "Counter: 2"
    // Variable 'count' is encapsulated, making it inaccessible from outside.

    /**
     * ========================================================
     * Dynamic Function Generation
     * ========================================================
     * Closures allow for dynamic function generation.
     * These dynamically generated functions can keep track of variables from their outer scope.
     */
    function multiplier(factor) {
        return function (x) {
            return x * factor;
        };
    }
    const timesTwo = multiplier(2);
    console.log(`Times Two: ${timesTwo(4)}`); // Outputs: "Times Two: 8"

    /**
     * ========================================================
     * Event Handling and Callbacks
     * ========================================================
     * Closures enable you to handle events and callbacks effectively by preserving state across multiple invocations.
     * This is critical in asynchronous programming.
     */
    let clickCount = 0;
    document.addEventListener("click", function () {
        clickCount++;
        console.log(`Click count: ${clickCount}`);
    });
    // The event listener closure captures the clickCount variable, allowing it to persist across multiple clicks.

    /**
     * ========================================================
     * Closure Gotchas: Looping
     * ========================================================
     * Be cautious of closures capturing loop variables.
     * This is often called the "loop variable closure problem" and leads to unexpected behavior.
     */
    for (var i = 1; i <= 3; i++) {
        setTimeout(function () {
            console.log(`Loop Problem: ${i}`); // Outputs: "Loop Problem: 4" three times
        }, 1000);
    }

    // Solution: Use 'let' instead of 'var' or pass 'i' as an argument to a self-invoking function.
    for (let i = 1; i <= 3; i++) {
        setTimeout(function () {
            console.log(`Loop Solved: ${i}`); // Outputs: "Loop Solved: 1", "Loop Solved: 2", "Loop Solved: 3"
        }, 1000);
    }
}

closures();
