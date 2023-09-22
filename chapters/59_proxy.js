/**
 * ========================================================
 * Proxy
 * ========================================================
 * The Proxy object in JavaScript is used to define custom behavior for fundamental
 * operations (e.g., property lookup, assignment, enumeration, function invocation, etc.).
 */

/**
 * ========================================================
 * 1. Basic Object Proxy
 * ========================================================
 * Using Proxy to intercept 'get' and 'set' operations on an object.
 */
const person = {
    name: "Ishtmeet",
    age: 25,
};

const personProxy = new Proxy(person, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return "Property not found";
        }
    },
    set(target, prop, value) {
        if (prop === "age" && typeof value !== "number") {
            throw new TypeError("Age must be a number");
        }
        target[prop] = value;
    },
});

// Usage: Invocation of Proxy
console.log(personProxy.name); // Output: "Ishtmeet"
console.log(personProxy.unknownProperty); // Output: "Property not found"

/**
 * ========================================================
 * 2. Array Proxy
 * ========================================================
 * Proxies can also be used to intercept operations on arrays.
 */
const numbers = [1, 2, 3];
const arrayProxy = new Proxy(numbers, {
    get(target, prop) {
        if (isNaN(prop)) {
            return target[prop];
        } else {
            return target[parseInt(prop, 10)];
        }
    },
});

// Usage: Invocation of Array Proxy
console.log(arrayProxy[1]); // Output: 2
console.log(arrayProxy.length); // Output: 3

/**
 * ========================================================
 * 3. Function Proxy
 * ========================================================
 * Using Proxy to intercept the 'apply' operation on a function.
 */
function add(a, b) {
    return a + b;
}

const addProxy = new Proxy(add, {
    apply(target, thisArg, args) {
        console.log(`Function is called with arguments: ${args}`);
        return target.apply(thisArg, args);
    },
});

// Usage: Invocation of Function Proxy
console.log(addProxy(1, 2)); // Output: Function is called with arguments: 1,2
// Output: 3

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Validation
 * -------------
 * Proxies can validate object structure when a property is set.
 */
const user = {};
const userProxy = new Proxy(user, {
    set(target, prop, value) {
        if (prop === "age" && (value < 0 || value > 150)) {
            throw new RangeError("Invalid age");
        }
        target[prop] = value;
    },
});

// Usage: Invocation of Validation Proxy
try {
    userProxy.age = 200; // Throws RangeError: Invalid age
} catch (e) {
    console.log(e.message); // Output: Invalid age
}

/**
 * 2. Property Enumeration
 * -----------------------
 * Proxies can modify property enumeration behavior.
 */
const noEnumProxy = new Proxy(person, {
    ownKeys(target) {
        return Object.keys(target).filter((key) => key !== "age");
    },
});

// Usage: Invocation of Property Enumeration Proxy
console.log(Object.keys(noEnumProxy)); // Output: ["name"]

/**
 * 3. Revocable Proxies
 * --------------------
 * Proxies can be revoked, disabling the target object.
 */
const { proxy, revoke } = Proxy.revocable(person, {});
revoke();

// Usage: Invocation of Revocable Proxy
try {
    console.log(proxy.name); // Throws TypeError: proxy is revoked
} catch (e) {
    console.log(e.message); // Output: proxy is revoked
}

/**
 * 4. Meta-Programming
 * -------------------
 * Proxies enable you to perform meta-programming tasks such as modifying 'instanceof' behavior.
 */
const instanceProxy = new Proxy(function () {}, {
    hasInstance(target, instance) {
        return false; // Every object is not an instance of this function
    },
});

/**
 * 5. Conditional Logic Based on Context
 * ------------------------------------
 * The 'get' handler can use different logic based on the receiver.
 */
const conditionalProxy = new Proxy(person, {
    get(target, prop, receiver) {
        if (receiver === person) {
            return target[prop];
        } else {
            return "Unauthorized";
        }
    },
});

// Usage: Invocation of Conditional Logic Proxy
console.log(conditionalProxy.name); // Output: "Ishtmeet"
