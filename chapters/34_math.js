/*
 * ========================================================
 * Math Object
 * ========================================================
 * The Math object provides static properties and methods for mathematical constants and functions.
 * It doesn't need to be instantiated.
 */

/*
 * ========================================================
 * Common Constants
 * ========================================================
 * The Math object includes several mathematical constants for convenience.
 */
const pi = Math.PI; // π (Pi): 3.141592653589793
const e = Math.E; // Euler's Number: 2.718281828459045

/*
 * ========================================================
 * Basic Operations
 * ========================================================
 * The Math object provides methods for basic mathematical operations.
 */
const sqrt = Math.sqrt(16); // Square root: Output will be 4
const abs = Math.abs(-7); // Absolute value: Output will be 7

/*
 * ========================================================
 * Rounding Operations
 * ========================================================
 * JavaScript includes several methods to perform various kinds of rounding.
 */
const ceil = Math.ceil(4.3); // Rounds up: Output will be 5
const floor = Math.floor(4.7); // Rounds down: Output will be 4
const round = Math.round(4.5); // Standard rounding: Output will be 5

/*
 * ========================================================
 * Trigonometry Functions
 * ========================================================
 * Math includes trigonometric functions like sin, cos, tan, etc.
 */
const sin = Math.sin(Math.PI / 2); // Output will be 1
const cos = Math.cos(Math.PI); // Output will be -1

/*
 * ========================================================
 * Generating Random Numbers
 * ========================================================
 * The Math object provides a method for generating pseudo-random numbers.
 */
const random = Math.random(); // Generates a random number between 0 (inclusive) and 1 (exclusive)

/*
 * ========================================================
 * Nuances and Advanced Use-Cases
 * ========================================================
 */

/*
 * 1. Generating Random Integers
 * To generate a random integer within a specific range [min, max]:
 */
const randomInt = Math.floor(Math.random() * (10 - 1 + 1)) + 1; // Random integer between 1 and 10

/*
 * 2. Precision Issues
 * Floating-point arithmetic in JavaScript may not be 100% precise.
 */
const imprecise = Math.sqrt(2);
const precise = parseFloat(imprecise.toFixed(4)); // Rounded to up to 4 decimal places

/*
 * 3. Clamping Values
 * To clamp a number within a specific range:
 */
const value = 25; // Replace with the actual value
const clamped = Math.min(Math.max(value, 10), 20); // Clamps value between 10 and 20

/*
 * 4. Calculating Hypotenuse
 * Calculates the hypotenuse of a right-angled triangle.
 */
const hypotenuse = Math.hypot(3, 4); // Output will be 5

/*
 * 5. Exponentiation
 * You can use either Math.pow() or the ** operator for exponentiation.
 */
const pow = Math.pow(2, 3); // Output will be 8
const exp = 2 ** 3; // Output will be 8

/*
 * 6. Special Cases: NaN and Infinity
 * Some operations may result in NaN (Not-a-Number) or Infinity.
 */
const nanResult = Math.sqrt(-1); // Output will be NaN

/*
 * 7. Sign Function
 * Determines the sign of a number. It returns 1, -1, 0, -0, or NaN.
 */
const sign = Math.sign(-7); // Output will be -1

/*
 * 8. Logarithmic Functions
 */
const ln = Math.log(Math.E); // Natural Logarithm: Output will be 1
const log10 = Math.log10(100); // Base 10 Logarithm: Output will be 2

/*
 * 9. Bitwise Operations
 * For bitwise operations, consider using bitwise operators (|, &, ^, ~, <<, >>, >>>) instead of Math methods.
 */
