/**
 * The `loops` function demonstrates various types of loops available in JavaScript.
 * Each loop has its own use-case and characteristics.
 */
function loops() {
    /**
     * ========================================================
     * For Loop
     * ========================================================
     * The for loop is the most basic loop in JavaScript.
     * It consists of three optional expressions: initialization, condition, and final-expression.
     */
    console.log("For Loop:");
    for (let i = 0; i < 5; i++) {
        console.log(i); // Output: 0, 1, 2, 3, 4
    }

    /**
     * ========================================================
     * While Loop
     * ========================================================
     * The while loop continues executing as long as its condition is true.
     */
    console.log("While Loop:");
    let j = 0;
    while (j < 5) {
        console.log(j); // Output: 0, 1, 2, 3, 4
        j++;
    }

    /**
     * ========================================================
     * Do-While Loop
     * ========================================================
     * Similar to a while loop, but it guarantees at least one execution of the code block,
     * even if the condition is false.
     */
    console.log("Do-While Loop:");
    let k = 0;
    do {
        console.log(k); // Output: 0, 1, 2, 3, 4
        k++;
    } while (k < 5);

    /**
     * ========================================================
     * Array forEach Loop
     * ========================================================
     * The forEach() method executes a provided function once for each array element.
     */
    console.log("Array forEach Loop:");
    const arr = [1, 2, 3, 4, 5];
    arr.forEach((item, index) => {
        console.log(`Item at ${index}: ${item}`);
    });

    /**
     * ========================================================
     * Loop Control Statements
     * ========================================================
     * The 'break' statement terminates the loop, and 'continue' skips to the next iteration.
     */
    console.log("Loop Control Statements:");
    for (let i = 0; i < 5; i++) {
        if (i === 2) {
            continue; // Skips the current iteration
        }
        if (i === 4) {
            break; // Terminates the loop
        }
        console.log(i); // Output: 0, 1, 3
    }

    /**
     * ========================================================
     * Nested Loops
     * ========================================================
     * You can nest loops within loops, but be cautious, as it can lead to performance issues.
     */
    console.log("Nested Loops:");
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            console.log(`i: ${i}, j: ${j}`); // Outputs 9 combinations of i and j
        }
    }

    /**
     * ========================================================
     * The 'for...in' Loop
     * ========================================================
     * Enumerates the properties of an object.
     * NOTE: It's not recommended for array iterations as it also enumerates prototype properties.
     */
    console.log("For...in Loop:");
    const obj = { a: 1, b: 2, c: 3 };
    for (const prop in obj) {
        console.log(`obj.${prop} = ${obj[prop]}`);
    }

    /**
     * ========================================================
     * The 'for...of' Loop
     * ========================================================
     * The for...of loop iterates over values in iterable objects like arrays, strings, maps, etc.
     */
    console.log("For...of Loop:");
    const str = "Hello";
    for (const char of str) {
        console.log(char); // Output: H, e, l, l, o
    }
}

loops();
