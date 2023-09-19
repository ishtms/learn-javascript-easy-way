function strings() {
    /**
     * ========================================================
     * String creation
     * ========================================================
     * In JavaScript, strings can be created in multiple ways:
     * 1. Using single quotes: '...'
     * 2. Using double quotes: "..."
     * 3. Using backticks: `...` (ES6 template literals)
     */
    const str1 = "Hello";
    const str2 = "World";
    const str3 = `Hello, ${str2}`;
    console.log(`String using Single Quotes: ${str1}`);
    console.log(`String using Double Quotes: ${str2}`);
    console.log(`String using Template Literals: ${str3}`);

    /**
     * ========================================================
     * String length
     * ========================================================
     * The 'length' property can be used to obtain the number of code units in a string.
     */
    console.log(`String Length: ${str1.length}`);

    /**
     * ========================================================
     * String Concatenation
     * ========================================================
     * Strings can be joined together (concatenated) using either the '+' operator or the 'concat()' method.
     */
    const concatenated = str1 + " " + str2;
    const concatenatedWithMethod = str1.concat(" ", str2);
    console.log(`Concatenated with +: ${concatenated}`);
    console.log(`Concatenated with concat(): ${concatenatedWithMethod}`);

    /**
     * ========================================================
     * Common String Methods
     * ========================================================
     * JavaScript provides various methods to manipulate and query strings.
     * Examples include 'indexOf', 'slice', 'toUpperCase', and 'toLowerCase'.
     */
    const index = str1.indexOf("e"); // Finds the first occurrence of 'e'
    const sliced = str1.slice(1, 4); // Extracts characters between index 1 and 3
    const upper = str1.toUpperCase(); // Converts the string to uppercase
    const lower = str1.toLowerCase(); // Converts the string to lowercase
    console.log(`Index of 'e': ${index}`);
    console.log(`Slice from index 1 to 3: ${sliced}`);
    console.log(`Uppercase: ${upper}`);
    console.log(`Lowercase: ${lower}`);

    /**
     * ========================================================
     * Template Literals
     * ========================================================
     * Template literals provide more advanced features like string interpolation, expressions, and multiline support.
     */
    const multiLine = `This is a
  multiline
  string.`;
    console.log(`Multiline String: \n${multiLine}`);

    /**
     * ========================================================
     * Sub-strings and Character Access
     * ========================================================
     * Various methods like 'substring', 'substr', and 'charAt' are available to extract substrings and individual characters.
     */
    const subString = str1.substring(1, 4); // Extracts characters between index 1 and 3
    const subStr = str1.substr(1, 3); // Starts from index 1 and extracts 3 characters
    const char = str1.charAt(1); // Gets the character at index 1
    console.log(`Substring (1, 4): ${subString}`);
    console.log(`Substr (1, 3): ${subStr}`);
    console.log(`Char at index 1: ${char}`);

    /**
     * ========================================================
     * String Split and Join
     * ========================================================
     * ----------------------
     * The 'split' method can be used to turn a string into an array based on a delimiter.
     * The 'join' method reverses this operation, joining an array into a string.
     */
    const splitString = str1.split(""); // Splits the string into its individual characters
    const joinedString = splitString.join("-"); // Joins the array elements with a hyphen
    console.log(`Split String: ${splitString}`);
    console.log(`Joined String: ${joinedString}`);

    /**
     * ========================================================
     * String immutability
     * ========================================================
     * Strings in JavaScript are immutable, meaning they cannot be changed once created.
     * Any method that appears to alter a string will actually return a new string.
     */
    const newStr = str1.replace("H", "Y"); // Returns a new string with 'H' replaced by 'Y'
    console.log(`Original String: ${str1}`);
    console.log(`New String: ${newStr}`);
}

strings();
