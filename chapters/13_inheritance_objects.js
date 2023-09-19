function inheritanceWithObjects() {
    /**
     * ========================================================
     * Prototypal Inheritance
     * ========================================================
     * JavaScript uses prototypes for inheritance.
     * Every object can have a reference to its prototype, an object from which it inherits properties.
     */
    const animal = {
        makeSound: function () {
            return "Some generic animal sound";
        },
    };

    const dog = Object.create(animal);
    dog.bark = function () {
        return "Woof!";
    };

    console.log(dog.makeSound()); // Logs "Some generic animal sound", inherited from animal

    /**
     * ========================================================
     * Constructor Function Inheritance
     * ========================================================
     * Inheritance can also be implemented using constructor functions.
     * The 'Vehicle' constructor serves as a base class for other vehicle types.
     */
    function Vehicle(type) {
        this.type = type;
    }

    Vehicle.prototype.move = function () {
        return "Moving!";
    };

    function Car(brand) {
        Vehicle.call(this, "Car"); // Call the parent constructor
        this.brand = brand;
    }

    // Set up the prototype chain
    Car.prototype = Object.create(Vehicle.prototype);
    Car.prototype.constructor = Car;
    Car.prototype.honk = function () {
        return "Beep!";
    };

    const myCar = new Car("Tesla");
    console.log(myCar.move()); // Logs "Moving!", inherited from Vehicle

    /**
     * ========================================================
     * Overriding Methods
     * ========================================================
     * Inherited methods can be overridden in the derived object.
     * Here, the makeSound method of 'dog' is overridden.
     */
    dog.makeSound = function () {
        return "Woof! Woof!";
    };

    console.log(dog.makeSound()); // Logs "Woof! Woof!", overridden method

    /**
     * ========================================================
     * Using `instanceof`
     * ========================================================
     * The `instanceof` operator checks if an object is an instance of a particular class or constructor.
     */
    console.log(myCar instanceof Car); // Logs true
    console.log(myCar instanceof Vehicle); // Logs true

    /**
     * ========================================================
     * Static Methods and Inheritance
     * ========================================================
     * Static methods are not associated with individual instances but with the constructor itself.
     * They are inherited by child constructors.
     */
    Vehicle.staticMethod = function () {
        return "I am a static method in Vehicle";
    };

    console.log(Car.staticMethod()); // Logs 'I am a static method in Vehicle', inherited from Vehicle

    /**
     * ========================================================
     * Object's Own Methods
     * ========================================================
     * Using Object.prototype.hasOwnProperty() to check if a property is owned by the object or inherited from the prototype.
     */
    for (let prop in dog) {
        if (dog.hasOwnProperty(prop)) {
            console.log(`${prop}: ${dog[prop]}`);
        }
    }
}

inheritanceWithObjects();
