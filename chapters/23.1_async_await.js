/**
 * ========================================================
 * Async/Await
 * ========================================================
 * 'async/await' is a modern way to write asynchronous code in JavaScript.
 * It provides a more readable and maintainable syntax over callbacks and Promises.
 */

/**
 * ========================================================
 * 1. Basic Syntax
 * ========================================================
 * Declaring a function as 'async' makes it return a Promise implicitly.
 * You can use 'await' within an 'async' function to pause the execution until a Promise is resolved or rejected.
 */
async function fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
}
// Invoke the function to see it in action
fetchData().then((data) => console.log(data));

/**
 * ========================================================
 * 2. Handling Errors
 * ========================================================
 * It's crucial to handle errors when dealing with asynchronous operations.
 * 'try/catch' blocks are commonly used within 'async' functions for this purpose.
 */
async function fetchDataWithErrorHandling() {
    try {
        const response = await fetch("https://api.example.com/data");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}
// Invoke the function to see error handling in action
fetchDataWithErrorHandling().catch((error) => console.error(error));

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * Error Propagation
 * -----------------
 * Throwing an exception within an 'async' function causes it to return a Promise that is rejected.
 */
async function failAsync() {
    throw new Error("Failed");
    // This is equivalent to: return Promise.reject(new Error('Failed'));
}

/**
 * Concurrency with Promise.all()
 * ------------------------------
 * 'async/await' can work in tandem with Promise.all() to execute multiple asynchronous operations concurrently.
 */
async function fetchAllData() {
    const [data1, data2] = await Promise.all([
        fetch("https://api.example.com/data1").then((res) => res.json()),
        fetch("https://api.example.com/data2").then((res) => res.json()),
    ]);
    return { data1, data2 };
}

/**
 * Using 'for-await-of' with Async Iterables
 * -----------------------------------------
 * The 'for-await-of' loop enables you to traverse through async iterables as though they were synchronous.
 */
async function handleAsyncIterable(asyncIterable) {
    for await (const item of asyncIterable) {
        console.log(item);
    }
}

/**
 * Non-Promise Asynchronous Operations
 * ----------------------------------
 * While 'await' is designed to work with Promises, it can also be used with non-Promise values.
 * When you 'await' a non-Promise value, it's returned instantly.
 */
async function notReallyAsync() {
    const value = await 42;
    return value; // 42, instantly
}

/**
 * Running Async Functions Immediately
 * -----------------------------------
 * You can immediately invoke an async function using an IIFE (Immediately Invoked Function Expression).
 */
(async function () {
    const data = await fetchData();
    console.log(data);
})();
