/**
 * The `typeCoercion` function explores the various scenarios where JavaScript performs
 * type coercion automatically. Type coercion can lead to unintended consequences,
 * so understanding how and when it happens is crucial.
 */
function typeCoercion() {
    /**
     * ===========================================
     * Equality Operator (==)
     * ===========================================
     * The equality operator (==) performs type coercion when the operands are of different types.
     * This can lead to counter-intuitive results.
     */
    console.log(`'5' == 5: ${"5" == 5}`); // true, because the string '5' is coerced to the number 5

    /**
     * ===========================================
     * Inequality Operator (!=)
     * ===========================================
     * Much like the equality operator, the inequality operator (!=) also coerces types if they're different.
     */
    console.log(`'5' != 5: ${"5" != 5}`); // false, because '5' is coerced to 5, making them equal

    /**
     * ===========================================
     * Strict Equality (===) and Inequality (!==)
     * ===========================================
     * Unlike their non-strict counterparts, these operators do not perform type coercion,
     * and they compare both the value and the type.
     */
    console.log(`'5' === 5: ${"5" === 5}`); // false, because no type coercion is performed
    console.log(`'5' !== 5: ${"5" !== 5}`); // true, because they are of different types

    /**
     * ===========================================
     * Boolean Contexts
     * ===========================================
     * When a non-boolean value is used in a context that expects a boolean, JavaScript will coerce the value.
     */
    if ("non-empty string") {
        // Non-empty strings are coerced to true
        console.log("This will run because a non-empty string is truthy.");
    }

    /**
     * ===========================================
     * Number Contexts
     * ===========================================
     * In numerical operations (excluding the + operator), non-numbers are coerced to numbers.
     */
    console.log(`'5' * '2': ${"5" * "2"}`); // 10, because both strings are coerced to numbers

    /**
     * ===========================================
     * String Concatenation
     * ===========================================
     * The + operator can be a bit tricky. It will concatenate strings, but if one operand is a number,
     * it will coerce the number to a string before concatenation.
     */
    console.log(`5 + '5': ${5 + "5"}`); // '55', because the number 5 is coerced to a string

    /**
     * ===========================================
     * Array Coercion
     * ===========================================
     * Arrays will be coerced into strings in specific situations, such as when used with the + operator.
     */
    console.log(`[1, 2] + [3, 4]: ${[1, 2] + [3, 4]}`); // '1, 23, 4', because both arrays are coerced to strings

    /**
     * ===========================================
     * Nuances and Caveats
     * ===========================================
     * 1) undefined and null are loosely equal to each other but not to any other value.
     * 2) When comparing with null using non-strict comparison, only undefined will be equal to it.
     */
    console.log(`undefined == null: ${undefined == null}`); // true, a special case in JavaScript
    console.log(`0 == null: ${0 == null}`); // false, because null is only loosely equal to undefined
}

typeCoercion();
