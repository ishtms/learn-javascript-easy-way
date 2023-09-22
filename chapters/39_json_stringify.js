function jsonStringify() {
    /**
     * ========================================================
     * Basic Syntax and Usage of JSON.stringify()
     * ========================================================
     * The JSON.stringify() method converts a JavaScript value (object, array, string,
     * number, boolean, or null) to a JSON-formatted string.
     *
     * Syntax: JSON.stringify(value, replacer?, space?)
     * - value: The JavaScript value to convert to a JSON string.
     * - replacer: Either a function or an array used to filter or modify the results.
     * - space: Specifies the indentation for readability.
     */
    const person = {
        name: "Ishtmeet",
        age: 25,
    };
    const jsonString = JSON.stringify(person);
    console.log(`Basic Usage: ${jsonString}`); // Output: '{"name":"Ishtmeet","age":25}'

    /**
     * ========================================================
     * Using Replacer Function
     * ========================================================
     * The replacer function can be used to filter out values or to transform the values
     * before they get stringified. The replacer function takes two arguments, the 'key' and 'value'.
     */
    const replacerFunction = (key, value) => {
        if (typeof value === "number") {
            return value * 2;
        }
        return value;
    };
    console.log(`With Replacer Function: ${JSON.stringify(person, replacerFunction)}`); // Output: '{"name":"Ishtmeet","age":50}'

    /**
     * ========================================================
     * Using Space for Indentation
     * ========================================================
     * The 'space' parameter specifies the number of spaces to use for indentation.
     * This makes the output JSON string more readable.
     */
    const prettyJsonString = JSON.stringify(person, null, 4);
    console.log(`Pretty Printed JSON: \n${prettyJsonString}`);

    /**
     * ========================================================
     * Nuances and Edge Cases
     * ========================================================
     */

    /**
     * Handling Undefined and Functions
     * --------------------------------
     * JSON.stringify() will omit properties with undefined values, functions, or Symbol types.
     */
    const objWithUndefined = { name: "Ishtmeet", greet: undefined, sayHi: function () {} };
    console.log(`Omitting Undefined and Functions: ${JSON.stringify(objWithUndefined)}`); // Output: '{"name":"Ishtmeet"}'

    /**
     * Handling Circular References
     * ----------------------------
     * JSON.stringify() throws an error when there are circular references in the object.
     */
    const circularObj = { name: "Ishtmeet" };
    circularObj.self = circularObj;
    // Uncomment the following line will result in an error
    // console.log(JSON.stringify(circularObj));

    /**
     * toJSON Method
     * ------------
     * If an object has a toJSON method, JSON.stringify() calls it and stringifies
     * the value returned by toJSON().
     */
    const objWithToJSON = {
        name: "Ishtmeet",
        age: 25,
        toJSON() {
            return {
                name: this.name,
            };
        },
    };
    console.log(`Using toJSON method: ${JSON.stringify(objWithToJSON)}`); // Output: '{"name":"Ishtmeet"}'

    /**
     * Handling Dates
     * --------------
     * JSON.stringify() will convert Date objects to their ISO string representation.
     */
    const objWithDate = { name: "Ishtmeet", birthDate: new Date() };
    console.log(`Handling Dates: ${JSON.stringify(objWithDate)}`);
}

jsonStringify();
