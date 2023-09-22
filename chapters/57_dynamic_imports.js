/**
 * ========================================================
 * Dynamic Import in JavaScript
 * ========================================================
 * Dynamic import() syntax in JavaScript enables you to import modules on-the-fly, providing the
 * ability to load modules conditionally or on demand.
 */

/**
 * ========================================================
 * 1. Basic Usage
 * ========================================================
 * Using 'await import()' allows you to import a module dynamically.
 * This returns a promise that resolves to the imported module.
 */
async function basicUsage() {
    const module = await import("./myModule.js");
    module.someFunction(); // Call the function from the dynamically imported module
}

/**
 * ========================================================
 * 2. Using with Promises
 * ========================================================
 * Alternatively, you can use the Promise-based '.then()' syntax to handle dynamic imports.
 */
function usingPromise() {
    import("./myModule.js")
        .then((module) => {
            module.someFunction(); // Call the function from the dynamically imported module
        })
        .catch((err) => {
            console.error("Failed to load the module:", err);
        });
}

/**
 * ========================================================
 * 3. Dynamic Path
 * ========================================================
 * The path from which to dynamically import can be constructed at runtime.
 */
const moduleName = "module1";
import(`./${moduleName}.js`).then((module) => {
    module.someFunction(); // Invoke function from dynamically determined module
});

/**
 * ========================================================
 * 4. Importing Multiple Modules
 * ========================================================
 * 'Promise.all()' can be used to import multiple modules simultaneously.
 */
Promise.all([import("./module1.js"), import("./module2.js")]).then(([module1, module2]) => {
    module1.someFunction();
    module2.anotherFunction();
});

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Code Splitting
 * -----------------
 * Dynamic imports enable code splitting, particularly useful when used with bundlers like Webpack.
 */
if (someCondition) {
    import("./heavyModule.js").then((module) => {
        module.heavyComputation(); // Load and use only when 'someCondition' is true
    });
}

/**
 * 2. Fallback Logic
 * -----------------
 * If importing a module fails, you can specify fallback behavior.
 */
import("./optionalModule.js")
    .catch(() => import("./fallbackModule.js"))
    .then((module) => {
        module.someFunction(); // Use the fallback module if the original fails to import
    });

/**
 * 3. Importing JSON and Other Non-JS Files
 * ----------------------------------------
 * With proper bundler configuration, you can dynamically import file types other than JavaScript.
 */
import("./config.json").then((config) => {
    console.log("Config loaded:", config.default);
});

/**
 * 4. Prefetching Modules
 * ----------------------
 * Prefetching can be done by importing a module and not using it immediately.
 */
import("./prefetchMe.js").catch(() => {
    // Prefetch silently and handle any load errors
});

/**
 * 5. Use With React Lazy
 * ----------------------
 * In React applications, dynamic import can be combined with React.lazy for component-level code splitting.
 */
// const LazyComponent = React.lazy(() => import('./LazyComponent'));

/**
 * 6. Caching
 * ----------
 * Once a module is dynamically imported, it gets cached. Further imports won't trigger additional network requests.
 */
import("./myModule.js"); // Network request made
import("./myModule.js"); // Cached, no additional network request
