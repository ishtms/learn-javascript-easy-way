/**
 * The `controlFlow` function demonstrates various control flow mechanisms in JavaScript.
 * This includes conditional statements, loops, and other ways to control the flow of code execution.
 */
function controlFlow() {
    /**
     * =================================================
     * If-Else Statements
     * =================================================
     * The if-else statement is used to execute a block of code if a specified condition is true.
     * If the condition is false, another block of code can be executed through the else statement.
     */
    const x = 10;
    if (x > 5) {
        console.log("x is greater than 5");
    } else {
        console.log("x is not greater than 5");
    }

    /**
     * =================================================
     * If-Else-If Ladder
     * =================================================
     * An if-else-if ladder is useful for decision-making between multiple alternatives.
     */
    const y = 20;
    if (y > 50) {
        console.log("y is greater than 50");
    } else if (y > 10) {
        console.log("y is greater than 10 but less than or equal to 50");
    } else {
        console.log("y is less than or equal to 10");
    }

    /**
     * =================================================
     * Ternary Conditional Operator (?:)
     * =================================================
     * A shorthand representation for simple if-else statements. It takes three operands.
     */
    const z = 30;
    const result = z > 25 ? "z is greater than 25" : "z is not greater than 25";
    console.log(`Ternary Operator: ${result}`);

    /**
     * =================================================
     * Switch-Case Statement
     * =================================================
     * The switch-case statement is useful for decision-making among multiple case clauses.
     * 'break' is used to exit a case once a match is found.
     */
    const fruit = "apple";
    switch (fruit) {
        case "banana":
            console.log("It's a banana!");
            break;
        case "apple":
            console.log("It's an apple!");
            break;
        default:
            console.log("Unknown fruit.");
    }

    /**
     * =================================================
     * Falsy Values and Truthy Values
     * =================================================
     * Falsy values: false, 0, "", null, undefined, NaN
     * Truthy values: All other values not considered falsy.
     */
    if ("") {
        console.log("This won't be logged, because an empty string is falsy.");
    } else {
        console.log("An empty string is a falsy value.");
    }

    /**
     * =================================================
     * Short-circuit Evaluation
     * =================================================
     * The logical OR (||) and AND (&&) operators can be used for conditions,
     * but they can also be used to evaluate and return expressions.
     */
    const output = null || "Default Value";
    console.log(`Short-circuit: ${output}`); // Logs "Default Value"

    /**
     * =================================================
     * Nullish Coalescing Operator (??)
     * =================================================
     * The ?? operator returns the right-hand operand when the left-hand operand is null or undefined.
     * This is a more precise version of the behavior provided by ||.
     */
    const value = null ?? "Fallback";
    console.log(`Nullish Coalescing: ${value}`); // Logs "Fallback"
}

controlFlow();
