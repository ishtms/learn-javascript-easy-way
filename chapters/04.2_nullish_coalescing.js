/**
 * ========================================================
 * Nullish Coalescing Operator (??)
 * ========================================================
 * The nullish coalescing operator (??) is a logical operator that returns the right-hand operand
 * when the left-hand operand is null or undefined; otherwise, it returns the left-hand operand.
 */

/**
 * ========================================================
 * Basic Usage
 * ========================================================
 * It is often used to assign default values to variables.
 */
const name = null;
const defaultName = "John Doe";
const username = name ?? defaultName;
console.log(`Username: ${username}`); // Output: 'Username: John Doe'

/**
 * ========================================================
 * Difference from Logical OR (||)
 * ========================================================
 * The nullish coalescing operator only checks for null or undefined,
 * while the logical OR operator (||) checks for any falsy value.
 */
const zeroValue = 0;
const orResult = zeroValue || "default";
const nullishResult = zeroValue ?? "default";
console.log(`OR Result: ${orResult}`); // Output: 'OR Result: default'
console.log(`Nullish Result: ${nullishResult}`); // Output: 'Nullish Result: 0'

/**
 * ========================================================
 * Combining with Ternary Operator
 * ========================================================
 * The nullish coalescing operator can be combined with the ternary operator for more complex conditions.
 */
const age = null;
const ageValue = age ?? (age === 0 ? "Zero" : "Undefined");
console.log(`Age Value: ${ageValue}`); // Output: 'Age Value: Undefined'

/**
 * ========================================================
 * Use in Object Properties
 * ========================================================
 * You can also use it to provide default values for object properties.
 */
const user = {
    firstName: "Jane",
};
const lastName = user?.lastName ?? "Doe";
console.log(`User's Last Name: ${lastName}`); // Output: 'User's Last Name: Doe'

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Short-Circuiting
 * --------------------
 * Similar to other logical operators, the nullish coalescing operator short-circuits,
 * meaning it won't evaluate the right-hand expression if it doesn't need to.
 */

/**
 * 2. Operator Precedence
 * ----------------------
 * Be cautious with operator precedence when combining nullish coalescing with other operators.
 * Using parentheses can help make the behavior explicit.
 */
const result = 5 + (null ?? 2); // This will be 5 + 2 = 7

/**
 * 3. Type Considerations
 * -----------------------
 * Nullish coalescing is useful for avoiding unexpected type conversions,
 * particularly when dealing with possible null or undefined values.
 */

/**
 * 4. Use Cases
 * ------------
 * It's commonly used in function arguments, object destructuring, and variable assignments
 * to provide default values only when a variable is null or undefined, but not for other falsy values.
 */
