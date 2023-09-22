/**
 * ========================================================
 * Custom Events
 * ========================================================
 * Custom Events enable you to define your own events in JavaScript.
 * This is very powerful for building modular, decoupled code.
 */

/**
 * ========================================================
 * 1. Creating a Custom Event
 * ========================================================
 * Create a Custom Event using the 'CustomEvent' constructor.
 * The 'detail' field allows you to pass custom data for the event.
 */
const myEvent = new CustomEvent("myEvent", {
    detail: { message: "This is a custom event" },
    bubbles: true,
    cancelable: true,
});

/**
 * ========================================================
 * 2. Dispatching a Custom Event
 * ========================================================
 * Dispatch the custom event using the 'dispatchEvent' method on an HTML element.
 * This will trigger any listeners for the custom event.
 */
const someElement = document.getElementById("someElement");
someElement.dispatchEvent(myEvent);

/**
 * ========================================================
 * 3. Listening for a Custom Event
 * ========================================================
 * Use 'addEventListener' to listen to the custom event.
 * Event handling is similar to handling native DOM events.
 */
someElement.addEventListener("myEvent", (event) => {
    console.log("Custom event fired:", event.detail.message);
});

/**
 * ========================================================
 * 4. Removing an Event Listener
 * ========================================================
 * To stop listening to an event, use 'removeEventListener'.
 */
function someFunction(event) {
    console.log("Handled by someFunction:", event.detail.message);
}
someElement.removeEventListener("myEvent", someFunction);

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Using Custom Events with Components
 * --------------------------------------
 * Custom Events are highly useful in component-based architectures like Web Components.
 */
class MyComponent extends HTMLElement {
    connectedCallback() {
        this.dispatchEvent(new CustomEvent("componentReady", { bubbles: true }));
    }
}
customElements.define("my-component", MyComponent);

/**
 * 2. Custom Events with Additional Data
 * -------------------------------------
 * You can attach extra information to a custom event via the 'detail' attribute.
 */
const userDataEvent = new CustomEvent("userData", {
    detail: { username: "IshtmeetDoe", age: 30 },
});

/**
 * 3. Event Propagation and Bubbling
 * ----------------------------------
 * You can control the phase in which the event is captured.
 * Use 'true' as the third argument to 'addEventListener' to capture the event during the capture phase.
 */
someElement.addEventListener(
    "myEvent",
    function (event) {
        console.log("Parent received:", event.detail.message);
    },
    true
);

/**
 * 4. Cancellable Custom Events
 * ------------------------------
 * A custom event can be made cancellable, meaning it can be stopped by an event listener.
 */
const cancellableEvent = new CustomEvent("cancellableEvent", { cancelable: true });
if (!someElement.dispatchEvent(cancellableEvent)) {
    console.log("Event was cancelled");
}

/**
 * 5. Polyfill for CustomEvent
 * ----------------------------
 * For compatibility with older browsers like Internet Explorer, you can use a polyfill.
 */
(function () {
    if (typeof window.CustomEvent === "function") return false;
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: null };
        const evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    window.CustomEvent = CustomEvent;
})();

/**
 * 6. Dynamic Event Names
 * ------------------------
 * Dynamic event names can be generated and used, providing an extra layer of flexibility.
 */
const someDynamicValue = "Click";
const eventName = "custom:" + someDynamicValue;
someElement.addEventListener(eventName, someFunction);
