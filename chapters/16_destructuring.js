function destructuring() {
    /**
     * ========================================================
     * Array Destructuring
     * ========================================================
     * Array destructuring allows you to unpack elements from arrays into variables.
     */
    const [first, second] = [1, 2];
    console.log(first); // Outputs 1
    console.log(second); // Outputs 2

    // Skipping elements
    const [, , third] = [1, 2, 3];
    console.log(third); // Outputs 3

    /**
     * ========================================================
     * Default Values
     * ========================================================
     * You can provide default values for both array and object destructuring.
     */
    const { name = "Ishtmeet" } = {};
    console.log(name); // Outputs 'Ishtmeet'

    /**
     * ========================================================
     * Object Destructuring
     * ========================================================
     * Object destructuring allows you to unpack properties from objects into variables.
     */
    const { a, b } = { a: 10, b: 20 };
    console.log(a); // Outputs 10
    console.log(b); // Outputs 20

    // Renaming variables
    const { a: alpha, b: beta } = { a: 1, b: 2 };
    console.log(alpha); // Outputs 1
    console.log(beta); // Outputs 2

    /**
     * ========================================================
     * Nested Destructuring
     * ========================================================
     * Destructuring can also be nested for more complex data structures like nested arrays and objects.
     */
    const {
        p: { q },
    } = { p: { q: "Nested" } };
    console.log(q); // Outputs 'Nested'

    /**
     * ========================================================
     * Function Parameters Destructuring
     * ========================================================
     * Function parameters can also be destructured for easier access to properties.
     */
    function greet({ name, age }) {
        console.log(`Hello, ${name}. You are ${age} years old.`);
    }
    greet({ name: "Ishtmeet", age: 25 }); // Outputs "Hello, Ishtmeet. You are 25 years old."

    /**
     * ========================================================
     * Using Rest Syntax
     * ========================================================
     * Rest elements can also be destructured, separating the first item from the rest of the array.
     */
    const [head, ...tail] = [1, 2, 3, 4];
    console.log(head); // Outputs 1
    console.log(tail); // Outputs [2, 3, 4]

    /**
     * ========================================================
     * Mixed Destructuring
     * ========================================================
     * Arrays and objects can be destructured in a single statement for complex structures.
     */
    const {
        x,
        y,
        z: [, zz],
    } = { x: 1, y: 2, z: [3, 4] };
    console.log(x, y, zz); // Outputs 1, 2, 4

    /**
     * ========================================================
     * Destructuring Gotchas
     * ========================================================
     * JavaScript interprets the opening curly brace as a block statement.
     * To destructure into an already declared variable, it should be wrapped in parentheses.
     */
    let foo;
    ({ foo } = { foo: "bar" });
    console.log(foo); // Outputs 'bar'
}

destructuring();
