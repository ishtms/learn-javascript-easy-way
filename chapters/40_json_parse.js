function jsonParse() {
    /**
     * ========================================================
     * Basic Syntax and Usage of JSON.parse()
     * ========================================================
     * The JSON.parse() method converts a JSON-formatted string into a JavaScript object or value.
     *
     * Syntax: JSON.parse(text, reviver?)
     * - text: The JSON string to parse.
     * - reviver: A function to transform the resulting object.
     */
    const jsonString = '{"name": "Ishtmeet", "age": 25}';
    const parsedObject = JSON.parse(jsonString);
    console.log(`Basic Usage:`, parsedObject); // Output: { name: 'Ishtmeet', age: 25 }

    /**
     * ========================================================
     * Using Reviver Function
     * ========================================================
     * The reviver function is used for post-processing the result.
     * It receives two arguments: 'key' and 'value'.
     */
    const reviverFunction = (key, value) => {
        if (key === "age") {
            return value + 1;
        }
        return value;
    };
    const parsedWithReviver = JSON.parse(jsonString, reviverFunction);
    console.log(`With Reviver Function:`, parsedWithReviver); // Output: { name: 'Ishtmeet', age: 26 }

    /**
     * ========================================================
     * Nuances and Edge Cases
     * ========================================================
     */

    /**
     * Malformed JSON Strings
     * ----------------------
     * If JSON.parse() encounters a malformed JSON string, it throws a SyntaxError.
     */
    // Uncomment the next line to see the error
    // const malformedJSON = JSON.parse("{'name': 'Ishtmeet'}"); // Single quotes are not valid

    /**
     * Parsing Dates
     * -------------
     * JSON.parse() doesn't automatically convert date strings into Date objects.
     * You need to manually convert them.
     */
    const parsedDateObject = JSON.parse('{"date": "2022-01-01T12:00:00Z"}');
    parsedDateObject.date = new Date(parsedDateObject.date);
    console.log(`Parsing Dates:`, parsedDateObject.date instanceof Date); // Output: true
}

jsonParse();
