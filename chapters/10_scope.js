function scopes() {
    /**
     * ========================================================
     * Global Scope
     * ========================================================
     * Variables declared outside any function, loop, or block are in the global scope.
     * They can be accessed and modified from any part of the code.
     */
    let globalVar = "I'm global!";
    console.log(`Global scope: ${globalVar}`); // Output: "Global scope: I'm global!"

    /**
     * ========================================================
     * Function Scope
     * ========================================================
     * Variables declared within a function are in the function's local scope.
     * They are not accessible outside of that function.
     */
    function functionScopeDemo() {
        let functionVar = "I'm local to this function!";
        console.log(`Function scope: ${functionVar}`); // Output: "Function scope: I'm local to this function!"
    }
    functionScopeDemo();

    /**
     * ========================================================
     * Block Scope
     * ========================================================
     * Variables declared with 'let' and 'const' within a block (e.g., loops, conditionals) are block-scoped.
     */
    {
        let blockVar = "I'm local to this block!";
        console.log(`Block scope: ${blockVar}`); // Output: "Block scope: I'm local to this block!"
    }

    /**
     * ========================================================
     * Hoisting
     * ========================================================
     * Variables declared with 'var' are hoisted to the top of their scope and automatically initialized with 'undefined'.
     * Variables declared with 'let' and 'const' are also hoisted but are not initialized, leading to a 'ReferenceError' if accessed before declaration.
     */
    console.log(`Hoisting: varVar is ${varVar}`); // Outputs: "Hoisting: varVar is undefined"
    var varVar = "I'm hoisted";
    // console.log(`Hoisting: letVar is ${letVar}`); // Uncommenting will throw a ReferenceError
    let letVar = "I'm also hoisted but not initialized";

    /**
     * ========================================================
     * Shadowing
     * ========================================================
     * When a variable in a local scope has the same name as a variable in an outer scope, this is known as shadowing.
     * The inner, or local, variable takes precedence over the outer variable.
     */
    let shadowVar = "I'm in the outer scope";
    {
        let shadowVar = "I'm in the inner scope";
        console.log(`Shadowing: ${shadowVar}`); // Output: "Shadowing: I'm in the inner scope"
    }
    console.log(`Shadowing: ${shadowVar}`); // Output: "Shadowing: I'm in the outer scope"

    /**
     * ========================================================
     * Closure
     * ========================================================
     * A closure is a function object that has access to its own scope, the scope of the outer function, and the global scope.
     */
    function outerFunction() {
        let outerVar = "I'm an outer variable!";
        function innerFunction() {
            console.log(`Closure: ${outerVar}`); // Can access outerVar
        }
        return innerFunction;
    }
    const myClosure = outerFunction();
    myClosure(); // Output: "I'm an outer variable!"

    /**
     * ========================================================
     * Lexical Scoping
     * ========================================================
     * Lexical scoping means that the scope of a variable is determined by its position in the code, not by function calls or other runtime operations.
     * Nested functions have access to variables declared in their outer scope.
     */
    function lexicalOuter() {
        let lexicalVar = "I'm lexically outside!";
        function lexicalInner() {
            console.log(`Lexical Scoping: ${lexicalVar}`); // Output: "Lexical Scoping: I'm lexically outside!"
        }
        lexicalInner();
    }
    lexicalOuter();
}

scopes();
