function inheritance() {
    /**
     * ========================================================
     * Base Class
     * ========================================================
     * This is the base class that other classes will inherit from.
     * The `Animal` class encapsulates general features that are common to all animals.
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }

        makeSound() {
            return `${this.name} makes a sound.`;
        }
    }

    /**
     * ========================================================
     * Derived Class
     * ========================================================
     * The `Dog` class inherits properties and methods from the `Animal` class.
     * The `extends` keyword is used to specify the class to inherit from.
     */
    class Dog extends Animal {
        makeSound() {
            return `${this.name} barks.`;
        }
    }

    // Create an instance of the Dog class, which is a derived class of Animal
    const myDog = new Dog("Fido");
    console.log(myDog.makeSound()); // Outputs: "Fido barks."

    /**
     * ========================================================
     * Method Overriding
     * ========================================================
     * Derived classes can override methods inherited from the base class.
     * The Dog class above overrides the `makeSound` method.
     */

    /**
     * ========================================================
     * Super Keyword
     * ========================================================
     * The `super` keyword is used to call corresponding methods of the base class.
     * This is useful for extending the base implementations.
     */
    class Cat extends Animal {
        makeSound() {
            const baseSound = super.makeSound();
            return `${baseSound} Actually, it meows.`;
        }
    }

    // Create an instance of the Cat class
    const myCat = new Cat("Whiskers");
    console.log(myCat.makeSound()); // Outputs: "Whiskers makes a sound. Actually, it meows."

    /**
     * ========================================================
     * Multiple Inheritance and Mixins
     * ========================================================
     * JavaScript does not support multiple inheritance directly.
     * However, you can achieve similar functionality using Mixins.
     */
    let FlyMixin = {
        fly() {
            return `${this.name} is flying.`;
        },
    };

    // Adding mixin methods to the Dog class
    Object.assign(Dog.prototype, FlyMixin);

    // Now, Dog class has a fly() method
    console.log(myDog.fly()); // Outputs: "Fido is flying."

    /**
     * ========================================================
     * instanceof Operator
     * ========================================================
     * The `instanceof` operator is used to check the type of an object.
     */
    console.log(myDog instanceof Animal); // Outputs: true
    console.log(myDog instanceof Dog); // Outputs: true
    console.log(myDog instanceof Cat); // Outputs: false
}

inheritance();
