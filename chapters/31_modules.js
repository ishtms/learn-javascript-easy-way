/**
 * ========================================================
 * JavaScript Modules
 * ========================================================
 * JavaScript modules allow for the isolation and reusability of code. Modules are a feature
 * introduced in ECMAScript 2015 (ES6) and are natively supported in most modern browsers and Node.js.
 */

/**
 * ========================================================
 * 1. Exporting in Modules
 * ========================================================
 * The `export` keyword allows you to make certain variables, functions, and objects
 * accessible from other modules.
 */

// Export a single entity
export const myVar = 10;

// Export multiple entities
export const anotherVar = 20;
export function myFunction() {
    return "Hello World!";
}

// Export default
// There can be only one default export per module
export default function myDefaultFunction() {
    return "Default Function";
}

// Renaming exports
// You can rename an exported entity while exporting
export { myFunction as renamedFunction };

/**
 * ========================================================
 * 2. Importing in Modules
 * ========================================================
 * Use the `import` statement to bring in exported entities into another module.
 */

// Import a single entity
import { myVar } from "./myModule.js";

// Import multiple entities
import { myVar, myFunction } from "./myModule.js";

// Import and rename
// Renaming can also be done at the time of importing
import { renamedFunction as originalFunction } from "./myModule.js";

// Import all exported entities as an object
import * as myModule from "./myModule.js";

// Import default export
import myDefaultFunction from "./myModule.js";

/**
 * ========================================================
 * Nuances and Advanced Use-Cases
 * ========================================================
 */

/**
 * 1. Dynamic Imports
 * ------------------
 * Dynamic imports enable you to load modules on demand using `import()`.
 * This returns a promise that resolves into the imported module.
 *
 * We have a dedicated chapter on dynamic imports.
 */
const modulePath = "./myModule.js";
import(modulePath)
    .then((module) => {
        console.log(module.myVar);
    })
    .catch((error) => {
        console.error("Dynamic Import Error:", error);
    });

/**
 * 2. Circular Dependencies
 * -------------------------
 * Although JavaScript modules handle circular dependencies gracefully,
 * it's a best practice to avoid such dependencies for cleaner and more maintainable code.
 */

// File A
import { b } from "./B.js";
export const a = b + 1;

// File B
import { a } from "./A.js";
export const b = a + 1;

/**
 * 3. Tree Shaking
 * ---------------
 * Build tools like Webpack can remove unused code from bundled modules,
 * a technique known as tree shaking.
 */

/**
 * 4. Preloading Modules
 * ----------------------
 * Preload modules using the "modulepreload" link type.
 * This helps in optimizing the loading performance.
 * <link rel="modulepreload" href="./myModule.js">
 */

/**
 * 5. Module-level Code
 * ---------------------
 * Any top-level code in a module runs only once, irrespective of the number of times the module is imported.
 */
console.log("This will run once");

/**
 * 6. CORS and Modules
 * -------------------
 * Just like fetch API, modules are subject to CORS policy.
 * Cross-origin modules might require server-side configuration.
 *
 * If server doesn't allow cross-origin, this will fail
 */
import { something } from "https://another-domain.com/module.js";

/**
 * 7. Conditional Exports (Node.js)
 * --------------------------------
 * Node.js allows you to specify different exports based on the environment like CommonJS or ES modules.
 * This is often configured in the package.json file.
 */

// package.json
// {
//   "exports": {
//     "require": "./cjs-module.js",
//     "import": "./esm-module.js"
//   }
// }

/**
 * 8. Module Formats
 * -----------------
 * ES6 modules are just one type. CommonJS (Node.js), AMD, and UMD are other module formats you might encounter.
 */

// CommonJS example
const something = require("module");

// AMD example
define(["module"], function (module) {
    /* code */
});

/**
 * 9. Module Scope
 * ----------------
 * Variables and functions declared in a module are scoped to the module itself,
 * and won't pollute the global scope.
 */

// The following variable is local to the module
const privateVariable = "I am not global";
