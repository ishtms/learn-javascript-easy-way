function functions() {
    /**
     * ========================================================
     * Function Declaration
     * ========================================================
     * In a function declaration, the function is defined using the 'function' keyword and can be called by its name.
     * Function declarations are hoisted, making them available throughout their scope.
     */
    function sayHello(name) {
        return `Hello, ${name}`;
    }
    console.log(sayHello("Ishtmeet")); // Outputs: "Hello, Ishtmeet"

    /**
     * ========================================================
     * Function Expression
     * ========================================================
     * A function expression assigns a function to a variable.
     * Unlike function declarations, function expressions are not hoisted.
     */
    const sayGoodbye = function (name) {
        return `Goodbye, ${name}`;
    };
    console.log(sayGoodbye("Bob")); // Outputs: "Goodbye, Bob"

    /**
     * ========================================================
     * Arrow Function
     * ========================================================
     * Arrow functions, introduced in ES6, provide a more concise syntax for function expressions.
     * Note that 'this' behaves differently in arrow functions.
     */
    const add = (a, b) => a + b;
    console.log(add(3, 4)); // Outputs: "7"

    /**
     * ========================================================
     * Callback Functions
     * ========================================================
     * Functions can be passed as arguments to other functions.
     * This enables a higher-order programming paradigm.
     */
    function process(callback, value) {
        return callback(value);
    }
    console.log(process(add.bind(null, 5), 3)); // Outputs: "8"

    /**
     * ========================================================
     * IIFE (Immediately Invoked Function Expression)
     * ========================================================
     * An IIFE is a function that runs as soon as it is defined.
     * It's a way to run functions immediately, to use variable scope in a specific way.
     */
    (function () {
        console.log("IIFE executed"); // Outputs: "IIFE executed"
    })();

    /**
     * ========================================================
     * Default Parameters
     * ========================================================
     * Starting with ES6, default parameter values can be defined in the function signature.
     */
    function greet(name = "Guest") {
        console.log(`Hi ${name}`); // Outputs: "Hi Guest" if no argument is provided
    }
    greet();
    greet("Emily"); // Outputs: "Hi Emily"

    /**
     * ========================================================
     * Rest Parameters
     * ========================================================
     * Rest parameters (introduced in ES6) allow functions to accept multiple arguments and collect them into an array.
     */
    function sum(...numbers) {
        return numbers.reduce((a, b) => a + b, 0);
    }
    console.log(sum(1, 2, 3, 4)); // Outputs: "10"

    /**
     * ========================================================
     * Function Hoisting
     * ========================================================
     * Function declarations are hoisted, allowing them to be used before they are defined in the code.
     * Function expressions are not hoisted.
     */
    console.log(earlyInvoke()); // Outputs: "Hoisted"

    function earlyInvoke() {
        return "Hoisted";
    }
}

functions();
