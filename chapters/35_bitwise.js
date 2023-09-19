/**
 * Basic Bitwise Operators
 * -----------------------
 * Bitwise operators act on the individual bits of numbers.
 */

/**
 * AND Operator (&)
 * Combines bits such that if both corresponding bits are 1, the result is 1.
 */
const andResult = 5 & 3; // 1

/**
 * OR Operator (|)
 * Combines bits such that if either of the corresponding bits is 1, the result is 1.
 */
const orResult = 5 | 3; // 7

/**
 * XOR Operator (^)
 * Combines bits such that if only one of the corresponding bits is 1, the result is 1.
 */
const xorResult = 5 ^ 3; // 6

/**
 * NOT Operator (~)
 * Inverts all the bits in a number.
 */
const notResult = ~5; // -6

/**
 * Left Shift (<<)
 * Shifts all bits to the left by a specified number of positions.
 */
const leftShift = 5 << 1; // 10

/**
 * Right Shift (>>)
 * Shifts all bits to the right by a specified number of positions.
 */
const rightShift = 5 >> 1; // 2

/**
 * Zero-Fill Right Shift (>>>)
 * Similar to >>, but fills with zeroes from the left.
 */
const zeroFillRightShift = -5 >>> 1; // 2147483645

/**
 * --------------------------------------
 * Nuances and Advanced Use-Cases
 * --------------------------------------
 */

/**
 * 1. Bit Manipulation Use-Cases
 *
 * Bitwise operations are commonly used in tasks like encryption, image processing, and more.
 */

/**
 * 2. Bit Masks
 *
 * You can use bit masks to extract or modify subsets of bit data within a larger set.
 */
const mask = 0b1010; // Bit mask
const data = 0b1111; // Data to be manipulated
const maskedData = data & mask; // 0b1010

/**
 * 3. Sign Extension
 *
 * Right-shifting can preserve the sign bit for signed numbers, depending on the operator used.
 */
const negativeNumber = -10;
const signPreserved = negativeNumber >> 1; // -5

/**
 * 4. Caution with Large Numbers
 *
 * Bitwise operations in JavaScript convert numbers to 32-bit signed integers, which may lead to unexpected results with large numbers.
 */

/**
 * 5. Bitwise vs Logical Operators
 *
 * Bitwise AND (&) and OR (|) should not be confused with logical AND (&&) and OR (||).
 */

/**
 * 6. Type Conversion
 *
 * Bitwise operations automatically convert numbers to integers, discarding any fractional part.
 */
const floatNumber = 5.7;
const integerConversion = floatNumber & 1; // 1

/**
 * 7. Two's Complement
 *
 * The NOT (~) operator flips all bits and adds 1, effectively calculating the two's complement.
 */

/**
 * 8. Quick Calculations
 *
 * You can use left shifts (<<) for quick multiplication by 2 and right shifts (>>) for quick division by 2.
 */
const quickMultiply = 5 << 1; // 10
const quickDivide = 10 >> 1; // 5

/**
 * 9. Cross-Browser Compatibility
 *
 * Bitwise operations are supported across all major browsers and JavaScript environments.
 */

/**
 * 10. Performance
 *
 * Bitwise operations are extremely fast and can be used for performance optimization in some cases.
 */
