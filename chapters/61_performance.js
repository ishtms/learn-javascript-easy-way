/*
 * ========================================================
 * Performance Optimization
 * ========================================================
 * JavaScript performance optimization is crucial for responsive and efficient web apps.
 * Here, we look at various techniques to improve the performance of your JavaScript code.
 */

/*
 * ========================================================
 * Common Techniques for Performance Optimization
 * ========================================================
 */

/*
 * 1. Use 'let' and 'const' Instead of 'var'
 * Modern scoping rules allow JavaScript engines to optimize your code better.
 */
const constantVariable = "I'm a constant"; // Cannot be reassigned
let mutableVariable = "I can change"; // Can be reassigned

/*
 * 2. Avoid Global Variables
 * Accessing global variables takes longer due to scope chain traversal.
 */
// BAD: Using a global variable
window.globalVar = "Slow access";

// GOOD: Using a local variable within a function
function useLocalVar() {
    const localVar = "Fast access";
}

/*
 * 3. Minimize DOM Manipulations
 * DOM interactions are costly. Batch your changes to minimize reflows.
 */
// BAD: Modifying the DOM in a loop
for (let i = 0; i < 1000; i++) {
    document.body.innerHTML += "<div>" + i + "</div>";
}

// GOOD: Concatenating HTML and updating DOM once
let content = "";
for (let i = 0; i < 1000; i++) {
    content += "<div>" + i + "</div>";
}
document.body.innerHTML = content;

/*
 * 4. Use Document Fragments
 * Document Fragments allow batching of DOM changes offline, reducing reflows.
 */
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const newItem = document.createElement("div");
    newItem.innerHTML = i;
    fragment.appendChild(newItem);
}
document.body.appendChild(fragment);

/*
 * 5. Debouncing and Throttling
 * These techniques limit how often a function can be executed, reducing load.
 */
// Debouncing: Executes the function after a certain delay if no new events have occurred
let timeout;
function debounce(func, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
}

// Throttling: Executes the function at most once in a specified period
let lastCall = 0;
function throttle(func, delay) {
    const now = Date.now();
    if (now - lastCall < delay) return;
    lastCall = now;
    func();
}

/*
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/*
 * 1. Lazy Loading
 * This technique only loads assets as they become visible, reducing initial load time.
 */
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Load your asset here, for example, an image
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
            }
        });
    });
    observer.observe(document.querySelector("#someElement"));
}

/*
 * 2. Use 'requestAnimationFrame' for Animations
 * This function allows the browser to optimize frame rendering, improving animation performance.
 */
function animate() {
    // Your animation logic here, for example, moving an element
    const element = document.getElementById("animatedElement");
    element.style.left = (parseInt(element.style.left, 10) || 0) + 1 + "px";
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

/*
 * 3. Web Workers for Off-Main-Thread Computations
 * Web Workers allow running scripts in the background, keeping the UI responsive.
 */
const worker = new Worker("worker.js"); // 'worker.js' contains the worker's code
worker.postMessage("start"); // Send initial message to worker
worker.onmessage = function (event) {
    console.log("Worker said:", event.data);
};

/*
 * 4. Minimize Forced Reflows/Repaints
 * Forced reflows are costly; change styles collectively to minimize them.
 */
const element = document.getElementById("someElement");
element.style.fontSize = "2em";
// Read layout properties collectively to avoid interleaved reads/writes
const height = element.offsetHeight;

/*
 * 5. Use 'passive' Event Listeners
 * Using the 'passive' option for events like scroll and touch can improve scrolling performance.
 */
document.addEventListener(
    "scroll",
    () => {
        // Your scroll logic here, e.g., showing/hiding a navigation bar
    },
    { passive: true }
);

/*
 * 6. Code Splitting
 * Dynamic imports allow loading only the required code modules, reducing the initial bundle size.
 */
if (someCondition) {
    // someCondition is a boolean value determining whether to load a module
    import("someModule").then((module) => {
        module.someFunction(); // someFunction is a function exported by 'someModule'
    });
}

/*
 * 7. Memoization
 * Memoization stores the results of expensive function calls to avoid redundant calculations.
 */
const cache = {};
function expensiveFunction(arg) {
    if (cache[arg]) {
        return cache[arg];
    }
    // Expensive calculations here, e.g., a complex algorithm
    const result = arg * arg; // Replace with your actual calculation
    cache[arg] = result;
    return result;
}
