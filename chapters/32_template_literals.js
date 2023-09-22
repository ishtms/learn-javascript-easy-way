/**
 * ========================================================
 * Template Literals
 * ========================================================
 */

/**
 * ========================================================
 * Basic Usage
 * ========================================================
 * Template literals simplify string creation and manipulation by enabling embedded expressions,
 * variables, and even function calls directly within strings.
 */

// Creating a basic string with template literals
const str = `Hello, world!`;

// String with variables
const name = "Ishtmeet";
const greeting = `Hello, ${name}!`; // Output: "Hello, Ishtmeet!"

// String with expressions
const x = 10,
    y = 20;
const sum = `The sum is ${x + y}.`; // Output: "The sum is 30."

/**
 * ========================================================
 * Multi-Line Strings
 * ========================================================
 * Template literals provide a clean way to handle multi-line strings, eliminating the need for escape characters.
 */

const multiLineStr = `
  This is a
  multi-line
  string.
`; // Output includes line breaks.

/**
 * ========================================================
 * Tagged Template Literals
 * ========================================================
 * Tag functions allow you to parse and manipulate template literals for custom behavior.
 */

function myTag(strings, ...values) {
    console.log(strings); // Outputs: Array of string literals like ["Hello ", ", the sum is ", "."]
    console.log(values); // Outputs: Array of evaluated expressions like ["Ishtmeet", 30]
    return "Modified String";
}

const tagged = myTag`Hello ${name}, the sum is ${x + y}.`; // Calls myTag function, Output: "Modified String"

/**
 * ========================================================
 * Nuances and Advanced Use-Cases
 * ========================================================
 */

/**
 * 1. Nesting Template Literals
 */
// Template literals can be nested within another template literal.
const nested = `outer ${`inner ${name}`}`; // Output: "outer inner Ishtmeet"

/**
 * 2. Raw Strings
 *
 * The String.raw tag function allows you to treat backslashes as literal characters.
 */
const rawStr = String.raw`This is a raw string \n ${name}.`; // Output: "This is a raw string \n Ishtmeet"

/**
 * 3. Custom Interpolators
 *
 * You can create custom interpolating functions for special formatting needs.
 */
function currency(strings, ...values) {
    let output = strings[0];
    values.forEach((val, index) => {
        output += `$${val.toFixed(2)}${strings[index + 1]}`;
    });
    return output;
}

const price = 25;
const fee = 2;
const totalCost = currency`Total cost is ${price + fee}.`; // Output: "Total cost is $27.00."

/**
 * 4. HTML Templating
 * Template literals are a handy tool for generating HTML structures.
 */
const html = `
  <div>
    <p>Hello, ${name}!</p>
  </div>
`; // Useful for DOM manipulation

/**
 * 5. Performance Considerations
 *
 * Although convenient, template literals might not always be the most performant choice for string operations, especially in loops.
 * The performance difference is negligible for most use-cases, but it's worth keeping in mind.
 */

/**
 * 6. Security Concerns
 *
 * When incorporating user input, make sure to sanitize the data to prevent Cross-Site Scripting (XSS) vulnerabilities.
 */
const user_input = "<script>alert(1)</script>"; // Unsafe input
const sanitized_input = /* some sanitization method */ "";
const secureString = `User said: ${sanitized_input}`; // Always sanitize

/**
 * 7. Escaping Template Syntax
 */
// To include literal ${} characters, you can escape them using backslashes.
const escapeExample = `Display the template syntax like this: $\{}`; // Output: Display the template syntax like this: ${}
