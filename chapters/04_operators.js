/**
 * The `operators` function demonstrates the various operators available in JavaScript,
 * their usage, and their specific characteristics.
 */
function operators() {
    /**
     * =================================================
     * Arithmetic Operators
     * =================================================
     * Arithmetic operators are used to perform mathematical operations between numeric operands.
     */
    console.log(`10 + 5: ${10 + 5}`); // 15, addition
    console.log(`10 - 5: ${10 - 5}`); // 5, subtraction
    console.log(`10 * 5: ${10 * 5}`); // 50, multiplication
    console.log(`10 / 5: ${10 / 5}`); // 2, division
    console.log(`10 % 3: ${10 % 3}`); // 1, remainder after division

    /**
     * =================================================
     * Increment and Decrement Operators
     * =================================================
     * The increment (++) and decrement (--) operators are unary operators that add or subtract 1 from their operand.
     */
    let a = 1;
    a++; // Equivalent to a += 1 or a = a + 1
    console.log(`Increment: a = ${a}`); // 2
    a--; // Equivalent to a -= 1 or a = a - 1
    console.log(`Decrement: a = ${a}`); // 1

    /**
     * =================================================
     * Comparison Operators
     * =================================================
     * Comparison operators are used to compare two values and return a boolean result.
     */
    console.log(`10 > 5: ${10 > 5}`); // true, greater than
    console.log(`10 < 5: ${10 < 5}`); // false, less than
    console.log(`10 >= 10: ${10 >= 10}`); // true, greater than or equal to
    console.log(`10 <= 5: ${10 <= 5}`); // false, less than or equal to

    /**
     * =================================================
     * Equality and Inequality Operators
     * =================================================
     * Loose equality (==) performs type coercion, while strict equality (===) does not.
     */
    console.log(`'5' == 5: ${"5" == 5}`); // true, loose equality with type coercion
    console.log(`'5' === 5: ${"5" === 5}`); // false, strict equality without type coercion

    /**
     * =================================================
     * Logical Operators
     * =================================================
     * Logical operators are typically used with boolean values, but they can be used with non-boolean values as well.
     */
    console.log(`true && false: ${true && false}`); // false, AND operator
    console.log(`true || false: ${true || false}`); // true, OR operator
    console.log(`!true: ${!true}`); // false, NOT operator

    /**
     * =================================================
     * Bitwise Operators
     * =================================================
     * Bitwise operators operate on the individual bits of integers.
     */
    console.log(`5 & 1: ${5 & 1}`); // 1, bitwise AND
    console.log(`5 | 1: ${5 | 1}`); // 5, bitwise OR
    console.log(`~5: ${~5}`); // -6, bitwise NOT (Inverts the bits)

    /**
     * =================================================
     * Ternary Conditional Operator
     * =================================================
     * The ternary operator is a shorthand for an if-else statement. It takes three operands.
     */
    let value = 10;
    let isEven = value % 2 === 0 ? "even" : "odd"; // Condition ? Expr1 : Expr2
    console.log(`Ternary Operator: ${value} is ${isEven}`);

    /**
     * =================================================
     * Assignment Operators
     * =================================================
     * Assignment operators are used to assign value to variables.
     */
    let b = 10;
    b += 5; // Equivalent to b = b + 5
    console.log(`b += 5: ${b}`);

    /**
     * =================================================
     * Nullish Coalescing Operator (??)
     * =================================================
     * This operator returns the right-hand operand when the left-hand operand is null or undefined.
     */
    const nullable = null;
    const fallback = "default";
    const result = nullable ?? fallback;
    console.log(`Nullish Coalescing: ${result}`); // 'default'

    /**
     * =================================================
     * Optional Chaining Operator (?.)
     * =================================================
     * Allows you to read the value of a property located deep within a chain of connected objects
     * without having to check that each reference in the chain is valid.
     */
    const obj = { x: { y: 42 } };
    console.log(`Optional Chaining: ${obj?.x?.y}`); // 42
    console.log(`Optional Chaining: ${obj?.z?.y}`); // undefined
}

operators();
