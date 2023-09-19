function classes() {
    /**
     * ========================================================
     * Class Declaration
     * ========================================================
     * A class serves as a blueprint for creating objects.
     * It encapsulates data and behavior for an object.
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }

        makeSound() {
            return `${this.name} makes a sound.`;
        }
    }

    // Create an instance of the Animal class
    const animal = new Animal("Dog");
    console.log(animal.makeSound()); // Outputs: "Dog makes a sound."

    /**
     * ========================================================
     * Class Inheritance
     * ========================================================
     * Classes can inherit properties and methods from other classes.
     * The `extends` keyword is used for this purpose.
     */
    class Dog extends Animal {
        makeSound() {
            return `${this.name} barks.`;
        }
    }

    // Create an instance of the Dog class
    const dog = new Dog("Buddy");
    console.log(dog.makeSound()); // Outputs: "Buddy barks."

    /**
     * ========================================================
     * Access Modifiers
     * ========================================================
     * JavaScript classes don't have traditional access modifiers like private or public,
     * but you can use prefixes like # to denote private fields.
     */
    class Car {
        #brand;

        constructor(brand) {
            this.#brand = brand;
        }

        getBrand() {
            return this.#brand;
        }
    }

    const car = new Car("Tesla");
    console.log(car.getBrand()); // Outputs: "Tesla"

    /**
     * ========================================================
     * Static Methods
     * ========================================================
     * Static methods are methods that belong to the class, not an instance of the class.
     */
    class MathUtility {
        static add(a, b) {
            return a + b;
        }
    }

    console.log(MathUtility.add(5, 3)); // Outputs: 8

    /**
     * ========================================================
     * Getters and Setters
     * ========================================================
     * Getters and setters are special methods that allow controlled access to class properties.
     */
    class Circle {
        constructor(radius) {
            this._radius = radius;
        }

        get radius() {
            return this._radius;
        }

        set radius(value) {
            if (value < 0) {
                console.log("Invalid radius");
            } else {
                this._radius = value;
            }
        }
    }

    const circle = new Circle(5);
    console.log(circle.radius); // Outputs: 5

    circle.radius = 10;
    console.log(circle.radius); // Outputs: 10

    /**
     * ========================================================
     * Class Expression
     * ========================================================
     * Classes can be defined using class expressions, much like function expressions.
     */
    const Rectangle = class {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }

        area() {
            return this.width * this.height;
        }
    };

    const rectangle = new Rectangle(5, 10);
    console.log(rectangle.area()); // Outputs: 50
}

classes();
