/**
 * ========================================================
 * BigInt
 * ========================================================
 * BigInt is a built-in object that provides a way to represent whole numbers larger
 * than 2^53 - 1, which is the largest number JavaScript can reliably represent using the Number primitive.
 */

/**
 * ========================================================
 * 1. Basic Syntax
 * ========================================================
 * BigInt can be defined either by appending 'n' to the end of an integer literal or
 * by using the BigInt constructor function.
 */
const bigIntLiteral = 1234567890123456789012345678901234567890n;
const bigIntObject = BigInt("1234567890123456789012345678901234567890");

/**
 * ========================================================
 * 2. Arithmetic Operations
 * ========================================================
 * Arithmetic operations are supported on BigInts much like they are for Numbers,
 * but you can't mix BigInts and Numbers in these operations.
 */
const sum = bigIntLiteral + 1n;
// const invalidSum = bigIntLiteral + 1;  // This will throw a TypeError

/**
 * ========================================================
 * 3. Comparison
 * ========================================================
 * BigInt can be compared using all the regular comparison operators.
 * Just like arithmetic operations, you can't directly compare a BigInt with a Number.
 */
const isTrue = bigIntLiteral > 1000n; // Evaluates to true

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. No Auto-Type Conversion
 * ---------------------------
 * BigInt does not automatically convert into a string or a number.
 * Explicit conversion is often required when you're working with mixed types.
 */
const bigIntStr = String(bigIntLiteral);
// const invalidOperation = bigIntLiteral + " is big.";  // This will throw a TypeError

/**
 * 2. Divisions Are Floored
 * ------------------------
 * When performing division using BigInt, the division is floored,
 * meaning it rounds towards zero.
 */
const flooredDivision = 11n / 3n; // Result will be 3n

/**
 * 3. Bitwise Operations
 * ---------------------
 * You can perform bitwise operations with BigInt.
 * Both operands must be BigInts to perform these operations.
 */
const bitwiseAnd = 16n & 5n; // Output will be 0n

/**
 * 4. No Support for Math Object
 * -----------------------------
 * BigInt cannot be used with the JavaScript Math object's methods.
 */
// const sqrtBigInt = Math.sqrt(bigIntLiteral);  // This will throw a TypeError

/**
 * 5. JSON Serialization
 * ----------------------
 * JSON.stringify() can't serialize BigInt values,
 * you'll need to manually convert them to strings before serialization.
 */
// const bigIntJSON = JSON.stringify({value: bigIntLiteral});  // This will throw a TypeError

/**
 * 6. Compatibility
 * ----------------
 * BigInt is not yet universally supported across all environments,
 * so you may need to check for compatibility before using it.
 */
if (typeof BigInt !== "undefined") {
    const bigIntSupport = BigInt(10);
    console.log(`BigInt supported: ${bigIntSupport}`);
}
