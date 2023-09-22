/**
 * ========================================================
 * Decorators in JavaScript (Stage 3 Proposal - Cannot be used yet)
 * ========================================================
 * A decorator is a function that allows you to add new functionality to an object or an object method.
 * Although it's still a Stage 3 proposal, decorators are widely used in TypeScript and transpiler environments.
 */

/**
 * ========================================================
 * Introduction
 * ========================================================
 * Decorators can affect:
 * - Classes
 * - Class methods
 * - Accessors (getters/setters)
 * - Class properties
 *
 * They can:
 * 1. Replace the value being decorated.
 * 2. Access the value being decorated.
 * 3. Initialize the value being decorated.
 */
@defineElement("my-class")
class C extends HTMLElement {
    @reactive accessor clicked = false;
}

/**
 * ========================================================
 * 2. Calling Decorators
 * ========================================================
 * Decorators receive two arguments:
 * 1. The value being decorated.
 * 2. A context object with metadata.
 */

/**
 *
 * ========================================================
 * TypeScript example
 * ========================================================
 *
 * type Decorator = (value: Input, context: {
 *   kind: string;
 *   name: string | symbol;
 *   access: {
 *     get?(): unknown;
 *     set?(value: unknown): void;
 *   };
 *   private?: boolean;
 *   static?: boolean;
 *   addInitializer?(initializer: () => void): void;
 * }) => Output | void;
 */

/**
 * This function is an example of what a decorator might look like in pure JavaScript.
 * It does not use TypeScript 'type' keywords, but the concept remains the same.
 *
 * @param {any} value - The value being decorated.
 * @param {Object} context - Additional context about the decoration.
 */
function myDecorator(value, context) {
    // The context object can have properties like 'kind', 'name', etc.
    if (context.kind === "method") {
        // do something
    }
}

/**
 * ========================================================
 * 3. Applying Decorators
 * ========================================================
 * Decorators are applied in a well-defined sequence:
 * 1. All method and non-static field decorators are applied.
 * 2. The class decorator is applied.
 * 3. Finally, static field decorators are applied.
 */

/**
 * ========================================================
 * Basic Decorator Example: Logging
 * ========================================================
 * The following is a simple logging decorator applied to a class method.
 */
function logged(value, { kind, name }) {
    if (kind === "method") {
        return function (...args) {
            console.log(`Starting ${name} with arguments ${args.join(", ")}`);
            const ret = value.call(this, ...args);
            console.log(`Ending ${name}`);
            return ret;
        };
    }
}

class C {
    @logged
    m(arg) {}
}

new C().m(1); // Output: Starting m with arguments 1
//         Ending m

/**
 * ========================================================
 * Advanced Usage: Method Chaining
 * ========================================================
 * Decorators can also be used to enable method chaining by always returning 'this'.
 */
function chainable(target, name, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        originalMethod.apply(this, args);
        return this;
    };
    return descriptor;
}

class MyClass {
    @chainable
    method1() {
        console.log("method1");
    }

    @chainable
    method2() {
        console.log("method2");
    }
}

const myInstance = new MyClass();
myInstance.method1().method2();
// Output: method1
//         method2
