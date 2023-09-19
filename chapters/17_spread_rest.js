/**
 * Spread Operator: Expands an iterable (array, string, etc.) into its elements.
 * Rest Operator: Collects remaining elements or properties into an array or object.
 */
function spreadAndRest() {
    /**
     * ========================================================
     * Spread Operator in Arrays
     * ========================================================
     * The spread operator can be used to spread elements of an iterable, such as an array, into individual elements.
     */
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];
    console.log(arr2); // Outputs [1, 2, 3, 4, 5]

    /**
     * ========================================================
     * Spread Operator in Objects
     * ========================================================
     * The spread operator can also be used to spread an object's own enumerable properties into a new object.
     */
    const obj1 = { a: 1, b: 2 };
    const obj2 = { ...obj1, c: 3 };
    console.log(obj2); // Outputs { a: 1, b: 2, c: 3 }

    /**
     * ========================================================
     * Combining Objects with Spread
     * ========================================================
     * If the same property exists in both objects, the one from the latter object will overwrite the former.
     */
    const obj3 = { a: 1, b: 2 };
    const obj4 = { b: 3, c: 4 };
    const obj5 = { ...obj3, ...obj4 };
    console.log(obj5); // Outputs { a: 1, b: 3, c: 4 }

    /**
     * ========================================================
     * Spread Operator in Function Calls
     * ========================================================
     * The spread operator can be used to pass elements of an array as arguments to a function.
     */
    const numbers = [1, 2, 3];
    console.log(Math.max(...numbers)); // Outputs 3

    /**
     * ========================================================
     * Rest Operator in Function Parameters
     * ========================================================
     * The rest operator is used to collect all remaining elements into an array.
     * This can be particularly useful in functions to capture an indefinite number of arguments.
     */
    function sum(...args) {
        return args.reduce((a, b) => a + b);
    }
    console.log(sum(1, 2, 3, 4)); // Outputs 10

    /**
     * ========================================================
     * Rest Operator in Array Destructuring
     * ========================================================
     * The rest operator can also be used in array destructuring to collect remaining elements.
     */
    const [first, ...rest] = [1, 2, 3, 4];
    console.log(first); // Outputs 1
    console.log(rest); // Outputs [2, 3, 4]

    /**
     * ========================================================
     * Rest Operator in Object Destructuring
     * ========================================================
     * In object destructuring, the rest operator collects remaining (non-destructured) properties into a new object.
     */
    const { x, ...others } = { x: 1, y: 2, z: 3 };
    console.log(x); // Outputs 1
    console.log(others); // Outputs { y: 2, z: 3 }

    /**
     * ========================================================
     * Rest vs Spread
     * ========================================================
     * The key difference is in the context where they are used.
     * The spread operator is used in variable assignment contexts to 'spread' elements or properties.
     * The rest operator is used in variable declaration contexts to collect remaining elements or properties.
     */
}

spreadAndRest();
