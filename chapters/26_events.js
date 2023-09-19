/**
 * ========================================================
 * Handling Events
 * ========================================================
 * Events are actions or occurrences that happen in the browser you are programming for,
 * whether caused by users interacting with your webpage or caused by the browser itself.
 */

/**
 * ========================================================
 * Basic Event Listeners
 * ========================================================
 * The addEventListener method attaches an event handler function to a specific event on a specific element.
 */
const buttonElement = document.getElementById("myButton");
buttonElement.addEventListener("click", function () {
    console.log("Button clicked!");
});

/**
 * ========================================================
 * The Event Object
 * ========================================================
 * An Event object is passed as the first parameter to event handlers and contains properties and methods related to the event.
 */
buttonElement.addEventListener("click", function (event) {
    console.log("Event object:", event);
});

/**
 * ========================================================
 * Removing Event Listeners
 * ========================================================
 * The removeEventListener method detaches an event handler function from an event.
 */
function clickHandler() {
    console.log("Button clicked!");
}
buttonElement.addEventListener("click", clickHandler);
buttonElement.removeEventListener("click", clickHandler);

/**
 * ========================================================
 * Event Propagation: Bubbling and Capturing
 * ========================================================
 * Event propagation involves three phases: capturing phase, target phase, and bubbling phase.
 */
// Bubbling phase
document.body.addEventListener(
    "click",
    function () {
        console.log("Body clicked! (Bubbling phase)");
    },
    false
);

// Capturing phase
document.body.addEventListener(
    "click",
    function () {
        console.log("Body clicked! (Capturing phase)");
    },
    true
);

/**
 * ========================================================
 * Event Delegation
 * ========================================================
 * Delegate handling events to a common ancestor rather than individual child elements.
 */
document.body.addEventListener("click", function (event) {
    if (event.target.matches(".clickable-item")) {
        console.log("Clickable item clicked");
    }
});

/**
 * ========================================================
 * Prevent Default Action
 * ========================================================
 * The preventDefault method cancels the event's default action if it's cancelable.
 */
buttonElement.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Default action prevented");
});

/**
 * ========================================================
 * Nuances with Examples
 * ========================================================
 */

/**
 * 1. 'this' Inside Event Handlers
 * -------------------------------
 * Inside an event handler, 'this' refers to the element to which the event handler is attached.
 */
buttonElement.addEventListener("click", function () {
    console.log(this === buttonElement); // true
});

/**
 * 2. stopPropagation vs stopImmediatePropagation
 * ---------------------------------------------
 * stopPropagation prevents further propagation of the event in the capturing and bubbling phases.
 * stopImmediatePropagation prevents other listeners of the same event from being called.
 */
buttonElement.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Propagation stopped"); // This will run
});

buttonElement.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    console.log("Immediate propagation stopped"); // Won't run if the previous handler is triggered first
});

/**
 * 3. Custom Events
 * ----------------
 * Custom events can be created using the Event constructor and dispatched using dispatchEvent.
 */
const customEvent = new Event("myEvent");
buttonElement.addEventListener("myEvent", function () {
    console.log("Custom event fired");
});
buttonElement.dispatchEvent(customEvent);

/**
 * 4. Passive Event Listeners
 * ---------------------------
 * For events like 'touchstart' and 'wheel' that are often related to scrolling,
 * you can improve performance by setting the 'passive' option to true.
 */
document.addEventListener("touchstart", function () {}, { passive: true });

/**
 * 5. Once Option
 * --------------
 * The 'once' option ensures that a listener is automatically removed after it's invoked once.
 */
buttonElement.addEventListener(
    "click",
    function () {
        console.log("Button clicked once and listener removed.");
    },
    { once: true }
);

/**
 * 6. Keyboard Events: keydown, keyup, keypress
 * ---------------------------------------------
 * Keyboard events include keydown, keyup, and keypress (though keypress is being phased out).
 * They provide information about the key pressed.
 */
document.addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key);
});
