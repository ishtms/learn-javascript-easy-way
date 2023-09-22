/**
 * ========================================================
 * Conditional (Ternary) Operator
 * ========================================================
 * The conditional (ternary) operator is a shorthand way to perform conditional (if-else-like) operations.
 * The syntax is: condition ? expression1 : expression2
 * If the condition is true, expression1 is executed, otherwise, expression2 is executed.
 */

/**
 * ========================================================
 * Basic Usage
 * ========================================================
 * In a simple example, you can use it to assign a value to a variable based on a condition.
 */
const isAdult = true;
const type = isAdult ? "Adult" : "Minor";
console.log(`Person is an: ${type}`); // Output: 'Person is an: Adult'

/**
 * ========================================================
 * Nested Ternary Operators
 * ========================================================
 * Ternary operators can be nested for multiple conditions, but this may reduce readability.
 */
const age = 25;
const ageGroup = age < 18 ? "Minor" : age < 60 ? "Adult" : "Senior";
console.log(`Age Group: ${ageGroup}`); // Output: 'Age Group: Adult'

/**
 * ========================================================
 * Using with Functions
 * ========================================================
 * You can also execute functions using the ternary operator.
 */
function greetMorning() {
    return "Good Morning";
}

function greetEvening() {
    return "Good Evening";
}

const isMorning = true;
console.log(isMorning ? greetMorning() : greetEvening()); // Output: 'Good Morning'

/**
 * ========================================================
 * As an Expression
 * ========================================================
 * The ternary operator is an expression, meaning it returns a value.
 * You can use it inline with other operations.
 */
const score = 95;
console.log(`You ${score > 50 ? "passed" : "failed"} the exam.`); // Output: 'You passed the exam.'

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Type Coercion
 * ----------------
 * Be cautious about type coercion when using the ternary operator, as it follows the same rules as other JavaScript operators.
 */
const value = "5";
const number = value == 5 ? "Loose equality" : "Strict inequality";
console.log(`Type Coercion: ${number}`); // Output: 'Loose equality'

/**
 * 2. Avoid Side Effects
 * ----------------------
 * Avoid using ternary operators for operations that produce side effects, like assignments or function calls with side effects.
 */

/**
 * 3. Readability
 * --------------
 * While chaining or nesting ternary operators can be powerful, it can also make code harder to read and maintain.
 */
