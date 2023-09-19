/**
 * The `variables` function demonstrates various aspects of variable declaration
 * and scoping in JavaScript, which include:
 * - Global Scope
 * - Function Scope (`var`)
 * - Block Scope (`let`, `const`)
 * - Hoisting
 * - Temporal Dead Zone (TDZ)
 * - Variable Shadowing
 * - Variable Redeclaration
 */

/**
 * ========================
 * Global Scope
 * ========================
 * Variables declared outside of any function or block are in the "global scope."
 * They can be accessed and modified from any part of the code.
 */
let globalVar = "I am a global variable";
console.log(`Global Scope: globalVar = ${globalVar}`);

function variables() {
    /**
     * ========================
     * 'var' Declaration
     * ========================
     * Variables declared with 'var' are function-scoped. Their visibility is
     * limited to the function where they are declared.
     *
     * Hoisting:
     * ---------
     * Variables and function declarations are moved, or "hoisted," to the top
     * of their containing scope during the compilation phase.
     */
    console.log(`Hoisting with 'var': a = ${a}`); // Output: undefined due to hoisting
    var a = 10;
    console.log(`'var' Declaration: a = ${a}`);

    /**
     * ========================
     * 'let' Declaration
     * ========================
     * Variables declared using 'let' are block-scoped. They are only accessible
     * within the block in which they are contained.
     *
     * Temporal Dead Zone (TDZ):
     * -------------------------
     * 'let' and 'const' declarations are not initialized, so accessing them
     * before their declaration results in a ReferenceError.
     */
    // console.log(`TDZ with 'let': c = ${c}`); // Uncommenting this will result in a ReferenceError
    let c = 30;
    console.log(`'let' Declaration: c = ${c}`);

    /**
     * ========================
     * 'const' Declaration
     * ========================
     * Variables declared using 'const' are block-scoped and cannot be reassigned
     * after they are initialized.
     *
     * Note:
     * -----
     * 'const' makes the variable itself immutable, but if it points to an object,
     * the object's properties can still be modified.
     */
    const e = 50;
    console.log(`'const' Declaration: e = ${e}`);
    const obj = { key: "value" };
    // obj = {}; // Uncommenting this line will result in an error
    obj.key = "new_value"; // Allowed
    console.log(`'const' object modification: obj.key = ${obj.key}`);

    /**
     * ========================
     * Variable Shadowing
     * ========================
     * Variables can "shadow" an outer variable by having the same name.
     * The inner variable will "overshadow" the outer one within its scope.
     */
    {
        let c = 60;
        const e = 70;
        console.log(`Shadowing: Inner scope: c = ${c}, e = ${e}`);
    }
    console.log(`Shadowing: Outer scope: c = ${c}, e = ${e}`);

    /**
     * ========================
     * Variable Redeclaration
     * ========================
     * Variables declared with 'var' can be redeclared in the same scope.
     * However, 'let' and 'const' cannot be redeclared in the same scope.
     */
    var a = 80; // Allowed
    // let c = 90; // Uncommenting this line will result in an error
    // const e = 100; // Uncommenting this line will result in an error
}

variables();

// Demonstrating globalVar is accessible outside the function as well.
console.log(`Global Scope: Accessing globalVar outside function: ${globalVar}`);
