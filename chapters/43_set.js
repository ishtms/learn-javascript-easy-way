/**
 * ========================================================
 * Set
 * ========================================================
 * A Set is a data structure that allows you to store unique values of any type,
 * whether they are primitive types or objects. Sets are particularly useful when you
 * want to avoid duplicate values.
 */

/**
 * ========================================================
 * 1. Initializing a Set
 * ========================================================
 * You can initialize a set with the `new Set()` constructor.
 * You can also pass an iterable object (like an array) to the constructor to initialize the set with values.
 */
const mySet = new Set([1, 2, 3, 4, 5]);

/**
 * ========================================================
 * 2. Adding Elements
 * ========================================================
 * The add() method is used to insert a new element into the set.
 */
mySet.add(6);
mySet.add("six");

/**
 * ========================================================
 * 3. Removing Elements
 * ========================================================
 * The delete() method removes a specific element from the set.
 * It returns true if the element is found and removed, otherwise it returns false.
 */
const wasDeleted = mySet.delete(1); // Returns true because '1' was in the set and has been removed

/**
 * ========================================================
 * 4. Checking for Existence
 * ========================================================
 * The has() method returns a boolean indicating whether an element is present in the set.
 */
console.log(mySet.has(2)); // Output will be true

/**
 * ========================================================
 * 5. Clearing All Elements
 * ========================================================
 * The clear() method is used to remove all elements from the set.
 */
// Uncomment the following line to clear the set
// mySet.clear();

/**
 * ========================================================
 * 6. Iterating Over a Set
 * ========================================================
 * The forEach method and for...of loop can be used to iterate over the Set.
 */
mySet.forEach((value) => {
    console.log(value); // Logs each value in the set
});

// Using for...of
for (const value of mySet) {
    console.log(value);
}

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * Uniqueness is Strict
 * --------------------
 * Sets enforce strict uniqueness; even two objects with the same shape are considered different.
 */
mySet.add({});
mySet.add({}); // Both objects will be added since they are different references

/**
 * Primitive Uniqueness
 * ---------------------
 * In a set, NaN is considered equal to NaN, which is different from the Array behavior.
 */
mySet.add(NaN);
mySet.add(NaN); // Won't add another NaN as it is already present

/**
 * Order of Elements
 * -----------------
 * Sets maintain the insertion order, which means items will be iterated in the order in which they were added.
 */

/**
 * Initialization Shortcuts
 * ------------------------
 * Sets can be initialized from arrays or even other sets, effectively removing any duplicates from arrays.
 */
const arraySet = new Set([1, 2, 2, 3, 4]); // Will remove the duplicate '2'
const anotherSet = new Set(mySet); // Creates a new set from an existing one

/**
 * Set Size
 * --------
 * You can check the size (number of unique elements) of the set using the size property.
 */
console.log(mySet.size); // Outputs the number of unique elements

/**
 * Chaining Methods
 * ----------------
 * Since add() returns the Set object, you can chain multiple add() calls together.
 */
mySet.add(7).add(8);
