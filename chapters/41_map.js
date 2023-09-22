function map() {
    /**
     * ========================================================
     * Initializing a Map
     * ========================================================
     * The Map object is initialized using the new Map() constructor.
     * You can optionally pass an array of key-value pairs to initialize the map.
     */
    const myMap = new Map([
        ["key1", "value1"],
        ["key2", "value2"],
        [1, "one"],
    ]);

    /**
     * ========================================================
     * Adding Elements
     * ========================================================
     * The set() method is used to add key-value pairs to the map.
     * It replaces the value if the key already exists.
     */
    myMap.set("key3", "value3");
    myMap.set({}, "emptyObject"); // Note: Object keys are supported

    /**
     * ========================================================
     * Accessing Values
     * ========================================================
     * The get() method is used to retrieve the value corresponding to a given key.
     */
    console.log(`Accessing Values:`, myMap.get("key1")); // Output: 'value1'
    console.log(`Accessing Values:`, myMap.get(1)); // Output: 'one'

    /**
     * ========================================================
     * Removing Elements
     * ========================================================
     * The delete() method removes a key-value pair from the map.
     * It returns true if the item exists and has been removed, otherwise false.
     */
    myMap.delete("key1");

    /**
     * ========================================================
     * Checking for Existence
     * ========================================================
     * The has() method checks if a key exists in the map.
     */
    console.log(`Checking Existence:`, myMap.has("key2")); // Output: true

    /**
     * ========================================================
     * Iterating Over a Map
     * ========================================================
     * The Map object can be iterated using forEach(), for...of, and its built-in iterators.
     */
    myMap.forEach((value, key) => {
        console.log(`Iterating using forEach: Key: ${key}, Value: ${value}`);
    });

    /**
     * ========================================================
     * Nuances and Advanced Techniques
     * ========================================================
     */

    /**
     * Order of Elements
     * -----------------
     * Maps maintain the insertion order, unlike regular JavaScript objects.
     */

    /**
     * Key Equality
     * ------------
     * Maps use the "SameValueZero" equality algorithm. For example, NaN is considered equal to NaN.
     */
    myMap.set(NaN, "notANumber");
    console.log(`Key Equality:`, myMap.get(NaN)); // Output: 'notANumber'

    /**
     * Chaining
     * --------
     * Methods like set() return the Map object itself, allowing for chained calls.
     */
    myMap.set("key4", "value4").set("key5", "value5");

    /**
     * Built-in Iterators
     * ------------------
     * Maps have built-in iterators and can be looped using for...of.
     */
    for (const [key, value] of myMap) {
        console.log(`Iterating using for...of: Key: ${key}, Value: ${value}`);
    }

    /**
     * Converting to Array
     * -------------------
     * Maps can be converted to arrays for easier manipulation and traversal.
     */
    const mapArray = Array.from(myMap);
    console.log(`Converting to Array:`, mapArray); // Output: Array of key-value pairs
}

map();
