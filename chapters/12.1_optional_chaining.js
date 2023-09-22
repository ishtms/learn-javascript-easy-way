/**
 * ========================================================
 * Optional Chaining (?.)
 * ========================================================
 * The optional chaining operator (?.) permits reading the value of a property located deep within a chain
 * of connected objects without having to expressly validate that each reference in the chain is valid.
 * It short-circuits if it encounters a null or undefined, returning undefined as the evaluation result.
 */

/**
 * ========================================================
 * Basic Usage
 * ========================================================
 * Optional chaining is used to safely access deeply nested properties of an object.
 */
const user = {
    profile: {
        name: "John",
        age: 30,
    },
};

const userName = user?.profile?.name;
console.log(`User Name: ${userName}`); // Output: 'User Name: John'

/**
 * ========================================================
 * Accessing Array Items
 * ========================================================
 * You can use optional chaining when attempting to access an index of an array that might be undefined.
 */
const arr = [1, 2, 3];
const value = arr?.[4];
console.log(`Array Value: ${value}`); // Output: 'Array Value: undefined'

/**
 * ========================================================
 * Function or Method Calls
 * ========================================================
 * You can also use optional chaining when calling a function or method that might not exist.
 */
const greet = user?.profile?.greet?.();
console.log(`Greeting: ${greet}`); // Output: 'Greeting: undefined'

/**
 * ========================================================
 * Combined with Nullish Coalescing
 * ========================================================
 * Optional chaining can be combined with the nullish coalescing operator for setting defaults.
 */
const city = user?.profile?.address?.city ?? "Unknown";
console.log(`City: ${city}`); // Output: 'City: Unknown'

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */
/**
 * 1. Short-Circuiting
 * --------------------
 * If optional chaining encounters null or undefined, it short-circuits the rest of the evaluation.
 */
const obj = { prop: null };
const shortCircuit = obj?.prop?.nonExistentMethod?.();
console.log(`Short-Circuit Result: ${shortCircuit}`); // Output: 'Short-Circuit Result: undefined'

/**
 * 2. Operator Precedence
 * ----------------------
 * To avoid any ambiguity when combining optional chaining with other operators, use parentheses.
 */
const mixed = { value: 5 };
const ambiguous = mixed?.value + 1; // This will result in 6, as you would expect
const clarified = mixed?.value + 1; // Use parentheses to make the operation order explicit
console.log(`Ambiguous: ${ambiguous}`); // Output: 'Ambiguous: 6'
console.log(`Clarified: ${clarified}`); // Output: 'Clarified: 6'

/**
 * 3. Functionality Limitation
 * ---------------------------
 * The operator only checks for null or undefined, but not for other falsy values like 0 or ''.
 */
const zeroCheck = { zero: 0 };
const zeroValue = zeroCheck?.zero ?? "No value";
console.log(`Zero Value: ${zeroValue}`); // Output: 'Zero Value: 0'

// const user: User = { id: 1, name: { first: 'John' } };
// const lastName = user?.name?.last;  // No TypeScript error here
