/**
 * ========================================================
 * WeakSet in JavaScript
 * ========================================================
 * A WeakSet is a special kind of set that holds only objects (not primitive types)
 * and does not prevent them from being garbage-collected. This makes it particularly
 * useful for scenarios that require temporary storage of object references.
 */

/**
 * ========================================================
 * 1. Initializing a WeakSet
 * ========================================================
 * You can initialize a WeakSet using the `new WeakSet()` constructor.
 * The constructor optionally accepts an iterable of objects.
 */
const weakSet = new WeakSet([{ a: 1 }, { b: 2 }]);

/**
 * ========================================================
 * 2. Adding Elements
 * ========================================================
 * To add an object to a WeakSet, use the add() method.
 * Note that only objects can be added, not primitive values.
 */
const myObj = { c: 3 };
weakSet.add(myObj);

/**
 * ========================================================
 * 3. Removing Elements
 * ========================================================
 * The delete() method removes a specific object from the WeakSet.
 * It returns true if the object is found and successfully removed.
 */
const wasDeleted = weakSet.delete(myObj); // Returns true as 'myObj' was in the set and has been removed

/**
 * ========================================================
 * 4. Checking for Existence
 * ========================================================
 * The has() method returns a boolean indicating whether an object exists in the WeakSet.
 */
console.log(weakSet.has(myObj)); // Output will be false because it's been removed

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * Garbage Collection
 * ------------------
 * Since WeakSets hold weak references to objects, the JavaScript engine can safely garbage-collect them.
 * This is useful when you want a collection of objects that does not prevent those objects from being garbage-collected.
 */

/**
 * Non-Enumerable
 * --------------
 * Unlike Sets, WeakSets are non-enumerable, which means you cannot iterate over them.
 * This lack of enumerability is by design to allow the JavaScript engine to perform garbage collection.
 */

/**
 * Limited API
 * -----------
 * WeakSets do not have methods like size, keys, values, or forEach. They also lack a clear() method.
 * This is intentional, again for allowing better garbage collection.
 */

/**
 * No Primitive Values
 * -------------------
 * WeakSets can only store objects. Adding primitive values like numbers or strings will throw a TypeError.
 */

/**
 * Use-Cases
 * ---------
 * WeakSets are commonly used for scenarios where you want a collection that won't prevent its items from being garbage-collected.
 * This makes it useful for things like storing DOM elements that may be removed from the DOM at any time.
 */

/**
 * No Duplicates
 * -------------
 * Just like Sets, WeakSets also enforce uniqueness among their elements.
 * Adding the same object more than once will have no effect.
 */
