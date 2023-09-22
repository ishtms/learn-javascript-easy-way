/**
 * The `this` keyword refers to the object it belongs to, and its value can differ based on how it's used.
 */
function thisKeyword() {
    /**
     * ========================================================
     * Global Context
     * ========================================================
     * In a global execution context, which is code that is outside of any function, `this` refers to the global object.
     */
    console.log(this === window); // Outputs true in a browser environment

    /**
     * ========================================================
     * Function Context
     * ========================================================
     * Inside a regular function, the value of `this` varies.
     * In "strict mode", it is undefined. Otherwise, it's the global object.
     */
    function regularFunction() {
        "use strict";
        console.log(this); // Outputs undefined in strict mode
    }
    regularFunction();

    /**
     * ========================================================
     * Object Context
     * ========================================================
     * In a method, which is a function stored as an object property, `this` refers to the object.
     */
    const obj = {
        name: "Ishtmeet",
        greet: function () {
            console.log(`Hello, my name is ${this.name}`); // Outputs "Hello, my name is Ishtmeet"
        },
    };
    obj.greet();

    /**
     * ========================================================
     * Constructor Context
     * ========================================================
     * In a constructor function, `this` refers to the object that the constructor creates.
     */
    function Person(name) {
        this.name = name;
    }
    const bob = new Person("Bob");
    console.log(bob.name); // Outputs "Bob"

    /**
     * ========================================================
     * Event Handler Context
     * ========================================================
     * In an event handler, `this` refers to the DOM element that received the event.
     */
    // HTML: <button id="myButton">Click Me</button>
    document.getElementById("myButton").addEventListener("click", function () {
        console.log(this.id); // Outputs "myButton"
    });

    /**
     * ========================================================
     * Explicit Binding
     * ========================================================
     * Using methods like `call()`, `apply()`, and `bind()`, you can explicitly set what `this` refers to.
     */
    function showName(label) {
        console.log(`${label}: ${this.name}`);
    }
    const ishtmeet = { name: "Ishtmeet" };
    showName.call(ishtmeet, "User"); // Outputs "User: Ishtmeet"

    /**
     * ========================================================
     * Arrow Functions
     * ========================================================
     * Arrow functions don't have their own `this`. Instead, they inherit `this` from their surrounding function context.
     */
    const arrowFunc = () => {
        console.log(this); // Outputs the `this` value of its surrounding function or context
    };
    arrowFunc();
}

thisKeyword();
