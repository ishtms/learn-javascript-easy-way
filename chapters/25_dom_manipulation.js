/**
 * ========================================================
 * DOM Manipulation
 * ========================================================
 * The Document Object Model (DOM) forms the structure of a web page and can be manipulated using JavaScript.
 * From accessing elements to changing styles, JavaScript plays a vital role in client-side web development.
 */

/**
 * ========================================================
 * Querying DOM Elements
 * ========================================================
 * Various methods are available for selecting elements in the DOM.
 */
const singleElement = document.getElementById("elementId"); // Selects element by ID
const multipleElements = document.getElementsByClassName("className"); // Selects elements by class name
const multipleElements2 = document.querySelectorAll(".className"); // More flexible; accepts any CSS selector

/**
 * ========================================================
 * Modifying Text and HTML Content
 * ========================================================
 * Text and HTML within elements can be changed using the following properties.
 */
singleElement.innerText = "New Text"; // Sets or changes text
singleElement.innerHTML = "<h1>New HTML</h1>"; // Sets or changes inner HTML

/**
 * ========================================================
 * Attributes and Classes
 * ========================================================
 * Attributes like 'data-', 'href', 'src', etc., and classes can be modified through these methods.
 */
singleElement.setAttribute("data-custom", "value"); // Adds a new attribute or changes the value of an existing attribute
const attr = singleElement.getAttribute("data-custom"); // Retrieves the value of an attribute
singleElement.classList.add("new-class"); // Adds a class
singleElement.classList.remove("old-class"); // Removes a class

/**
 * ========================================================
 * Creating, Appending, and Removing Elements
 * ========================================================
 * New DOM elements can be created and manipulated in various ways.
 */
const newElement = document.createElement("div"); // Creates a new <div> element
newElement.innerText = "I am a new element"; // Sets the text for the new element
document.body.appendChild(newElement); // Adds the new element as the last child of the body

newElement.remove(); // Removes the element from the DOM

/**
 * ========================================================
 * Event Handling
 * ========================================================
 * JavaScript allows you to listen to various events like clicks, form submissions, etc.
 */
singleElement.addEventListener("click", function (event) {
    console.log("Element clicked:", event); // Event object contains info about the click event
});

/**
 * ========================================================
 * Nuances with Examples
 * ========================================================
 */

/**
 * 1. innerHTML vs innerText
 * -------------------------
 * innerHTML can interpret and render HTML tags but poses a risk of Cross-Site Scripting (XSS).
 * innerText safely changes only the text content.
 */
singleElement.innerHTML = '<script>alert("Hacked")</script>'; // Unsafe
singleElement.innerText = '<script>alert("Hacked")</script>'; // Safe

/**
 * 2. querySelector vs getElementById
 * ----------------------------------
 * querySelector can use any CSS selector but is generally slower due to its flexibility.
 * getElementById is faster but limited to selecting elements by their IDs.
 */
document.querySelector("#elementId"); // Slower but flexible
document.getElementById("elementId"); // Faster but only for IDs

/**
 * 3. NodeList vs HTMLCollection
 * ----------------------------
 * While both look like arrays, NodeList and HTMLCollection are different.
 * NodeList can use forEach directly, but HTMLCollection cannot without conversion.
 */
const nodeList = document.querySelectorAll(".className"); // Returns NodeList
const htmlCollection = document.getElementsByClassName("className"); // Returns HTMLCollection

/**
 * 4. Event Delegation
 * -------------------
 * By using event delegation, you can avoid adding event listeners to multiple child elements.
 */
document.body.addEventListener("click", function (event) {
    if (event.target.matches(".btn")) {
        console.log("Button clicked");
    }
});

/**
 * 5. Style Manipulation Best Practices
 * ------------------------------------
 * Rather than directly manipulating an element's style property, use classes to make changes.
 */
singleElement.style.backgroundColor = "red"; // Direct manipulation, not recommended
singleElement.classList.add("bg-red"); // Using classes, recommended

/**
 * 6. Accessing Data Attributes
 * ----------------------------
 * Custom data attributes prefixed with "data-" can be accessed using the dataset property.
 */
const customData = singleElement.dataset.custom; // Returns "value" for an element with attribute data-custom="value"
