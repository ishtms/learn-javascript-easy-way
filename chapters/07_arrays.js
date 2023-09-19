/**
 * The `arrays` function demonstrates various features and operations available for arrays in JavaScript.
 * Arrays are list-like objects that allow you to store multiple values in a single variable.
 */
function arrays() {
    /**
     * ========================================================
     * Array Declaration and Initialization
     * ========================================================
     * There are multiple ways to declare and initialize arrays.
     */
    const arr1 = [1, 2, 3];
    const arr2 = new Array(1, 2, 3);
    console.log(`Array Literal: ${arr1}`); // Output: Array Literal: 1,2,3
    console.log(`Array Constructor: ${arr2}`); // Output: Array Constructor: 1,2,3

    /**
     * ========================================================
     * Array Length
     * ========================================================
     * The 'length' property provides the number of elements in an array.
     */
    console.log(`Array Length: ${arr1.length}`); // Output: Array Length: 3

    /**
     * ========================================================
     * Accessing Array Elements
     * ========================================================
     * Array elements can be accessed using zero-based index positions.
     */
    console.log(`First Element: ${arr1[0]}`); // Output: First Element: 1

    /**
     * ========================================================
     * Modifying Array Elements
     * ========================================================
     * Arrays in JavaScript are mutable, which means you can change their content.
     */
    arr1[0] = 10;
    console.log(`Modified Array: ${arr1}`); // Output: Modified Array: 10,2,3

    /**
     * ========================================================
     * Array Methods - Push, Pop, Shift, Unshift
     * ========================================================
     * These methods enable you to add or remove elements from either end of an array.
     */
    arr1.push(4); // Adds 4 to the end
    arr1.pop(); // Removes the last element
    arr1.shift(); // Removes the first element
    arr1.unshift(1); // Adds 1 to the beginning
    console.log(`After Push/Pop/Shift/Unshift: ${arr1}`); // Output: After Push/Pop/Shift/Unshift: 1,2,3

    /**
     * ========================================================
     * Splice and Slice
     * ========================================================
     * The splice() method modifies an array by adding or removing elements.
     * The slice() method returns a shallow copy of a portion of an array.
     */
    const removed = arr1.splice(1, 1); // Removes one element from index 1
    const sliced = arr1.slice(1, 3); // Returns a shallow copy from index 1 to 2
    console.log(`After Splice: ${arr1}`); // Output: After Splice: 1,3
    console.log(`Removed Elements: ${removed}`); // Output: Removed Elements: 2
    console.log(`Sliced Elements: ${sliced}`); // Output: Sliced Elements: 3

    /**
     * ========================================================
     * forEach, map, filter, reduce
     * ========================================================
     * High-order functions that allow for robust manipulation and iteration over arrays.
     */
    arr1.forEach((item) => console.log(`forEach: ${item}`));
    const mapped = arr1.map((item) => item * 2);
    const filtered = arr1.filter((item) => item > 1);
    const reduced = arr1.reduce((acc, item) => acc + item, 0);
    console.log(`Mapped: ${mapped}`); // Output: Mapped: 2,6
    console.log(`Filtered: ${filtered}`); // Output: Filtered: 3
    console.log(`Reduced: ${reduced}`); // Output: Reduced: 4

    /**
     * ========================================================
     * Array Destructuring
     * ========================================================
     * Allows you to unpack elements from arrays into separate variables.
     */
    const [first, second] = arr1;
    console.log(`Destructured: first = ${first}, second = ${second}`); // Output: Destructured: first = 1, second = 3

    /**
     * ========================================================
     * Spread Operator
     * ========================================================
     * Allows you to spread an array into places where zero or more elements are expected.
     */
    const arr3 = [...arr1, 4, 5];
    console.log(`Spread: ${arr3}`); // Output: Spread: 1,3,4,5

    /**
     * ========================================================
     * Checking Array Equality
     * ========================================================
     * JavaScript doesn't provide a straightforward way to check array equality (both value and type).
     * You can compare them by iterating through them or converting them to strings.
     */
    const isEqual = JSON.stringify(arr1) === JSON.stringify(arr2);
    console.log(`Array Equality: ${isEqual}`); // Output: Array Equality: false

    /**
     * ========================================================
     * Multi-Dimensional Arrays
     * ========================================================
     * Arrays can contain other arrays, making them multi-dimensional.
     */
    const multiArray = [
        [1, 2],
        [3, 4],
    ];
    console.log(`Multi-Dimensional Array: ${JSON.stringify(multiArray)}`); // Output: Multi-Dimensional Array: [[1,2],[3,4]]
}

arrays();
