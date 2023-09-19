/**
 * ========================================================
 * Fetch API
 * ========================================================
 * The Fetch API provides a modern, promise-based mechanism for making HTTP requests
 * in the browser and is also available in Node.js via third-party packages.
 */

/**
 * ========================================================
 * 1. Basic GET Request
 * ========================================================
 * A simple GET request can be made by passing a URL to `fetch()`. The method returns a Promise
 * that resolves to the Response object representing the completed request.
 */
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Fetch error:", error));

/**
 * ========================================================
 * 2. Basic POST Request
 * ========================================================
 * For POST requests, specify the HTTP method, headers, and body.
 */
const postData = {
    title: "foo",
    body: "bar",
    userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Fetch error:", error));

/**
 * ========================================================
 * Nuances and Advanced Use-Cases
 * ========================================================
 */

/**
 * 1. Custom Headers
 * -----------------
 * To send custom headers, create a Headers object and append the headers you need.
 */
const customHeaders = new Headers();
customHeaders.append("Authorization", "Bearer YOUR_ACCESS_TOKEN");

fetch("https://api.example.com/data", { headers: customHeaders })
    .then((response) => response.json())
    .then((data) => console.log(data));

/**
 * 2. Handling Timeouts
 * --------------------
 * Fetch does not have a built-in timeout feature. You can implement it using Promise.race().
 */
const timeoutFetch = (url, options, timeout = 3000) => {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Fetch timeout")), timeout)),
    ]);
};

/**
 * 3. Request and Response Metadata
 * --------------------------------
 * Request and Response objects contain metadata like status, headers, etc.
 */
fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
    console.log(response.status); // HTTP status code
    console.log(response.headers.get("Content-Type")); // Content-Type header
});

/**
 * 4. Manual Redirects
 * -------------------
 * Fetch allows you to manually handle redirects by setting the redirect option.
 */
fetch("https://example.com", { redirect: "manual" }).then((response) => {
    // Handle manual redirects here
});

/**
 * 5. Abort Request
 * ----------------
 * A fetch request can be aborted using the AbortController API.
 */
const controller = new AbortController();
const { signal } = controller;

fetch("https://example.com", { signal }).catch((error) => {
    if (error.name === "AbortError") {
        console.log("Fetch aborted");
    }
});
// To abort the request
controller.abort();

/**
 * 6. Streaming
 * ------------
 * Fetch API supports streaming of data using Response.body, which is a ReadableStream.
 */
fetch("https://example.com/large-file").then((response) => {
    const reader = response.body.getReader();
    // Handle streaming here
});

/**
 * 7. FormData
 * -----------
 * FormData API can be used with fetch to easily upload files or send form data.
 */
const formData = new FormData();
formData.append("key", "value");
fetch("https://example.com/upload", {
    method: "POST",
    body: formData,
});

/**
 * 8. CORS and Fetch
 * -----------------
 * Fetch is CORS-aware. To make requests to another origin, the server must include the proper CORS headers.
 */

/**
 * 9. Fetch vs. Axios
 * ------------------
 * Axios is a popular HTTP client with features like built-in timeout and automatic JSON parsing, which Fetch lacks by default.
 */
