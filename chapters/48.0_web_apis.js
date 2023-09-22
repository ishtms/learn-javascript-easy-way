/**
 * ========================================================
 * Web APIs - Part 1
 * ========================================================
 * Web APIs augment the capabilities of JavaScript, allowing developers to interact
 * with the web browser or other hosting environments. Web APIs often provide a way
 * to perform operations that aren't possible with JavaScript alone.
 */

/**
 * ========================================================
 * 1. XMLHttpRequest API
 * ========================================================
 * The traditional method for making HTTP requests in JavaScript.
 * While it's mostly superseded by the Fetch API, it's still widely used in legacy codebases.
 */
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.send();
xhr.onload = () => {
    if (xhr.status === 200) {
        console.log(xhr.response);
    } else {
        console.log(`Error: ${xhr.status}`);
    }
};

/**
 * ========================================================
 * 2. Fetch API
 * ========================================================
 * A modern way to fetch resources over the network. It returns Promises and
 * is much cleaner and more powerful than XMLHttpRequest.
 */
fetch("https://api.example.com/data")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Fetch Error:", error));

/**
 * ========================================================
 * 3. Geolocation API
 * ========================================================
 * This API is used to get the geographic position of a user. Note that it requires user consent.
 */
navigator.geolocation.getCurrentPosition(
    (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },
    (error) => console.error("Geolocation Error:", error)
);

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. AbortController for Fetch API
 * --------------------------------
 * The AbortController is used to terminate fetch requests.
 * This can be helpful to abort requests based on certain conditions, like a timeout.
 */
const controller = new AbortController();
const { signal } = controller;
fetch("https://api.example.com/data", { signal })
    .then((response) => response.json())
    .catch((err) => {
        if (err.name === "AbortError") {
            console.log("Fetch aborted");
        }
    });
// To abort the fetch
controller.abort();

/**
 * 2. Using the Cache API
 * ----------------------
 * This API allows you to cache network resources. This can significantly improve
 * the performance of web applications by reducing load times.
 */
caches.open("my-cache").then((cache) => {
    cache
        .add("https://api.example.com/data")
        .then(() => console.log("Data cached"))
        .catch((error) => console.error("Cache Error:", error));
});

/**
 * 3. Clipboard API
 * ----------------
 * The Clipboard API is used for interacting with the clipboard to read and write text.
 */
navigator.clipboard
    .writeText("Copied text")
    .then(() => console.log("Text copied to clipboard"))
    .catch((err) => console.error("Clipboard Error:", err));

/**
 * 4. Notification API
 * -------------------
 * Allows you to display native system notifications.
 * This can enhance the user experience by providing real-time updates.
 */
if (Notification.permission === "granted") {
    new Notification("Hello, world!");
} else {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            new Notification("Hello, world!");
        }
    });
}

/**
 * 5. Intersection Observer API
 * ----------------------------
 * Useful for detecting when an element enters or exits the viewport.
 * Common use-cases include lazy-loading images and infinite scrolling.
 */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Perform action, such as lazy-loading an image
            console.log("Element is in the viewport!");
        }
    });
});

// To observe a specific element
observer.observe(document.querySelector(".some-element"));
