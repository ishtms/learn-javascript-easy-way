/**
 * The `commonGotchas` function demonstrates common JavaScript gotchas and
 * unexpected behaviors that often trip up developers, including:
 * - Truthy and Falsy Values
 * - Equality (== vs ===)
 * - Hoisting and Temporal Dead Zone (TDZ)
 * - Closures in Loops
 * - `this` Context Issues
 * - Floating Point Precision
 * - Array and Object Comparison
 * - Type Coercion Surprises
 */

function commonGotchas() {
    /**
     * ========================
     * 1. Truthy and Falsy Values
     * ========================
     * In JavaScript, values are either "truthy" or "falsy" when evaluated in a boolean context.
     * This can lead to unexpected behavior if not properly understood.
     */
    console.log("\n=== 1. Truthy and Falsy Values ===");
    
    // Falsy values (all others are truthy):
    console.log(Boolean(false));     // false
    console.log(Boolean(0));         // false
    console.log(Boolean(""));        // false (empty string)
    console.log(Boolean(null));      // false
    console.log(Boolean(undefined)); // false
    console.log(Boolean(NaN));       // false
    
    // Common gotcha: empty arrays and objects are truthy!
    console.log(Boolean([]));        // true
    console.log(Boolean({}));        // true
    console.log(Boolean("0"));       // true (non-empty string)
    console.log(Boolean("false"));   // true (non-empty string)

    /**
     * ========================
     * 2. Equality (== vs ===)
     * ========================
     * JavaScript has two equality operators: loose equality (==) and strict equality (===).
     * Loose equality performs type coercion, which can lead to unexpected results.
     */
    console.log("\n=== 2. Equality (== vs ===) ===");
    
    console.log(0 == false);    // true (type coercion)
    console.log(0 === false);   // false (different types)
    
    console.log('' == false);   // true (both are falsy)
    console.log('' === false);  // false (different types)
    
    console.log(null == undefined);  // true (special case)
    console.log(null === undefined); // false (different types)
    
    // Array comparison
    console.log([] == ![]);     // true (due to type coercion)
    console.log([] === ![]);    // false

    /**
     * ========================
     * 3. Hoisting and TDZ
     * ========================
     * JavaScript hoists variable and function declarations, but not initializations.
     * `let` and `const` are hoisted but not initialized (Temporal Dead Zone).
     */
    console.log("\n=== 3. Hoisting and TDZ ===");
    
    // Function declarations are fully hoisted
    console.log(hoistedFunc()); // Works
    function hoistedFunc() {
        return "I was hoisted!";
    }
    
    // Variables with var are hoisted but initialized with undefined
    console.log(hoistedVar); // undefined (not ReferenceError)
    var hoistedVar = 42;
    
    // let/const are in TDZ before declaration
    // console.log(tdzVar); // ReferenceError: Cannot access 'tdzVar' before initialization
    let tdzVar = "I'm in TDZ before this line";

    /**
     * ========================
     * 4. Closures in Loops
     * ========================
     * Variables in loops using `var` are function-scoped, not block-scoped,
     * which can lead to unexpected behavior in asynchronous code.
     */
    console.log("\n=== 4. Closures in Loops ===");
    
    // Problem with var in loops
    console.log("Using var in loop:");
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 0); // All log 3
    }
    
    // Solution 1: Use let (block-scoped)
    console.log("Using let in loop:");
    for (let j = 0; j < 3; j++) {
        setTimeout(() => console.log(j), 0); // Logs 0, 1, 2
    }
    
    // Solution 2: IIFE to create a new scope
    console.log("Using IIFE in loop:");
    for (var k = 0; k < 3; k++) {
        (function(index) {
            setTimeout(() => console.log(index), 0); // Logs 0, 1, 2
        })(k);
    }

    /**
     * ========================
     * 5. `this` Context Issues
     * ========================
     * The value of `this` depends on how a function is called, not where it's defined.
     * This can be confusing, especially with callbacks and methods.
     */
    console.log("\n=== 5. `this` Context ===");
    
    const obj = {
        name: "My Object",
        logName: function() {
            console.log(this.name);
        },
        logNameArrow: () => {
            console.log(this.name); // `this` is inherited from the outer scope
        }
    };
    
    obj.logName();        // "My Object"
    obj.logNameArrow();   // undefined (or window.name in browsers)
    
    const logName = obj.logName;
    // logName();         // Error: Cannot read property 'name' of undefined (or window.name in non-strict mode)
    
    // Solution: bind the context
    const boundLogName = obj.logName.bind(obj);
    boundLogName();       // "My Object"

    /**
     * ========================
     * 6. Floating Point Precision
     * ========================
     * JavaScript uses binary floating-point numbers, which can lead to precision issues
     * with decimal fractions.
     */
    console.log("\n=== 6. Floating Point Precision ===");
    
    console.log(0.1 + 0.2);          // 0.30000000000000004
    console.log(0.1 + 0.2 === 0.3);  // false
    
    // Solution: Use a small epsilon for comparison
    function areEqual(a, b, epsilon = 1e-10) {
        return Math.abs(a - b) < epsilon;
    }
    console.log(areEqual(0.1 + 0.2, 0.3)); // true

    /**
     * ========================
     * 7. Array and Object Comparison
     * ========================
     * Arrays and objects are compared by reference, not by value.
     */
    console.log("\n=== 7. Array and Object Comparison ===");
    
    console.log([1, 2, 3] === [1, 2, 3]);  // false (different references)
    console.log({} === {});                 // false (different references)
    
    // Solution: Deep comparison needed
    function arraysEqual(a, b) {
        return a.length === b.length && 
               a.every((val, index) => val === b[index]);
    }
    
    console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // true

    /**
     * ========================
     * 8. Type Coercion Surprises
     * ========================
     * JavaScript's type coercion can produce unexpected results.
     */
    console.log("\n=== 8. Type Coercion Surprises ===");
    
    console.log([] + []);               // "" (empty string)
    console.log([] + {});               // "[object Object]"
    console.log({} + []);               // 0 (browser) or "[object Object]" (Node.js)
    console.log({} + {});               // [object Object][object Object] or NaN
    
    console.log("5" + 3);              // "53" (string concatenation)
    console.log("5" - 3);              // 2 (numeric subtraction)
    
    console.log(!!"false" == !"true"); // true (!!"false" is true, !"true" is false, true == false is false)
}

// Run the examples
commonGotchas();

// Export for testing purposes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { commonGotchas };
}
