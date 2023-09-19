/**
 * This function demonstrates the usage of call(), apply(), and bind() methods in JavaScript.
 * These methods allow for the manipulation of the 'this' keyword, as well as for borrowing and reusing methods across objects.
 */
function callApplyBind() {
    /**
     * ========================================================
     * The Call Method
     * ========================================================
     * The call() method invokes a function with a given 'this' value and arguments provided individually.
     * This is useful when you want to use a function's logic on an object which didn't originally have that function.
     */
    function showFullName(firstname, lastname) {
        console.log(`${this.title} ${firstname} ${lastname}`);
    }
    const person1 = { title: "Mr." };
    showFullName.call(person1, "John", "Doe"); // Outputs: "Mr. John Doe"

    /**
     * ========================================================
     * The Apply Method
     * ========================================================
     * The apply() method is almost identical to call(), but it takes arguments as an array, or array-like object.
     * This makes it a good choice when the number of function parameters is uncertain.
     */
    const person2 = { title: "Dr." };
    const names = ["Jane", "Doe"];
    showFullName.apply(person2, names); // Outputs: "Dr. Jane Doe"

    /**
     * ========================================================
     * The Bind Method
     * ========================================================
     * The bind() method returns a new function that, when called, has its 'this' keyword set to the provided value.
     * It allows you to permanently set the 'this' value for a function, regardless of how or where it is called.
     */
    const person3 = { title: "Prof." };
    const showFullNameProf = showFullName.bind(person3);
    showFullNameProf("Emily", "Blunt"); // Outputs: "Prof. Emily Blunt"

    /**
     * ========================================================
     * Use with Event Handlers
     * ========================================================
     * The bind() method is often used within event handlers to ensure the correct object is bound to 'this'.
     * This avoids unexpected behavior, especially when working with DOM elements.
     */
    const button = document.createElement("button");
    button.textContent = "Click me";
    const obj = {
        text: "Hello, world!",
        handleClick: function () {
            alert(this.text);
        },
    };
    button.addEventListener("click", obj.handleClick.bind(obj));
    document.body.appendChild(button); // Clicking this button will alert "Hello, world!"

    /**
     * ========================================================
     * Nuance: Bind Returns a New Function
     * ========================================================
     * The bind() method returns a new function every time it's called.
     * Therefore, the same binding of a function to an object will create different function instances.
     */
    const bound1 = showFullName.bind(person3);
    const bound2 = showFullName.bind(person3);
    console.log(bound1 === bound2); // Outputs: false

    /**
     * ========================================================
     * Bonus: `call` and `apply` Can Accept Additional Parameters
     * ========================================================
     * Both `call` and `apply` can accept more than one argument. The first argument is the object to which `this` should refer,
     * and the remaining arguments are those that should be passed to the function being called/applyed.
     */
    function multiply(a, b) {
        return a * b * this.factor;
    }

    const calculator = { factor: 10 };
    console.log(multiply.call(calculator, 5, 2)); // Outputs: 100 (5 * 2 * 10)
    console.log(multiply.apply(calculator, [5, 2])); // Outputs: 100 (5 * 2 * 10)
}

callApplyBind();
