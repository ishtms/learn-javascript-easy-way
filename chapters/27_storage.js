/**
 * ========================================================
 * Web Storage: localStorage and sessionStorage
 * ========================================================
 * Web storage allows you to store key-value pairs in a web browser with no expiration time (localStorage)
 * or for the duration of the session (sessionStorage).
 */

/**
 * ========================================================
 * Basic Usage of localStorage
 * ========================================================
 * localStorage allows you to store data with no expiration time. This data will persist even after closing the browser.
 */
localStorage.setItem("username", "IshtmeetDoe");
const username = localStorage.getItem("username");
console.log(`Username: ${username}`); // Output: Username: IshtmeetDoe
localStorage.removeItem("username");

/**
 * ========================================================
 * Basic Usage of sessionStorage
 * ========================================================
 * sessionStorage allows you to store data for the duration of a page session.
 */
sessionStorage.setItem("sessionId", "123456");
const sessionId = sessionStorage.getItem("sessionId");
console.log(`Session ID: ${sessionId}`); // Output: Session ID: 123456
sessionStorage.removeItem("sessionId");

/**
 * ========================================================
 * Iterating Over Items
 * ========================================================
 * Both localStorage and sessionStorage provide a way to iterate over stored items.
 */
localStorage.setItem("username", "IshtmeetDoe");
localStorage.setItem("email", "ishtmeet.doe@example.com");
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}

/**
 * ========================================================
 * Storage Event
 * ========================================================
 * The storage event is triggered when a storage area changes, due to setItem, removeItem, or clear method calls.
 */
window.addEventListener("storage", function (event) {
    console.log(`Key changed: ${event.key}, New value: ${event.newValue}`);
});

/**
 * ========================================================
 * Nuances and Best Practices
 * ========================================================
 */

/**
 * 1. Data Type Limitation
 * -----------------------
 * Both localStorage and sessionStorage can only directly store strings. To store objects or arrays, serialize them to JSON.
 */
const user = { name: "IshtmeetDoe", age: 30 };
localStorage.setItem("user", JSON.stringify(user));
const retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser); // Output: { name: 'IshtmeetDoe', age: 30 }

/**
 * 2. Storage Limit
 * ----------------
 * Both localStorage and sessionStorage have storage limits, typically around 5MB per domain in most modern browsers.
 */

/**
 * 3. Session Storage and Tabs
 * ---------------------------
 * sessionStorage is isolated per tab or window. Opening a new tab or window won't share the stored data.
 */

/**
 * 4. Synchronous Nature
 * ---------------------
 * The APIs for web storage are synchronous, meaning they could impact performance if used extensively.
 */

/**
 * 5. Browser Support
 * ------------------
 * Web storage is widely supported across browsers, but it's a good idea to check for compatibility.
 */
if (typeof Storage !== "undefined") {
    // Web storage supported
} else {
    // Web storage not supported
}

/**
 * 6. Storage Event Specifics
 * --------------------------
 * The 'storage' event is fired only in the context of other windows/tabs, not in the window/tab that made the change.
 */

/**
 * 7. Security Implications
 * ------------------------
 * Avoid storing sensitive information like passwords or tokens in web storage, as they can be accessed through JavaScript.
 */

/**
 * 8. Cross-Origin Restrictions
 * ----------------------------
 * Web storage adheres to the same-origin policy, meaning data stored will only be available on the same origin.
 */
