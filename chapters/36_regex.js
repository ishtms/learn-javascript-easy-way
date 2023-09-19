/**
 * Creating Regular Expressions
 * ----------------------------
 * There are two primary ways to create regular expressions: Literal Syntax and Constructor Syntax.
 */

/**
 * Literal Syntax
 * This is the most straightforward method and is defined between slashes (/ /).
 */
const regexLiteral = /world/;

/**
 * Constructor Syntax
 * Allows for more dynamic and complex expressions. Defined using the RegExp constructor.
 */
const regexConstructor = new RegExp("world");

/**
 * Flags
 * -----
 * Flags can be added to a regular expression to affect the search behavior.
 */

/**
 * Global search ('g')
 * Searches for all instances of the pattern in the string, not just the first one.
 */
const globalRegex = /world/g;

/**
 * Case-insensitive search ('i')
 * Ignores case while matching.
 */
const caseInsensitiveRegex = /world/i;

/**
 * Methods for Regular Expressions
 * -------------------------------
 * JavaScript offers several methods to work with regular expressions.
 */

/**
 * test()
 * Returns true if a match is found; otherwise, it returns false.
 */
const hasWorld = /world/.test("Hello, world!"); // true

/**
 * exec()
 * Executes a search for a match and returns an array of details; null if no match is found.
 */
const execArray = /world/.exec("Hello, world!"); // ['world', index: 7, input: 'Hello, world!', groups: undefined]

/**
 * String Methods with Regular Expressions
 * --------------------------------------
 * Regular expressions can also be used with certain String methods.
 */

/**
 * match()
 * Similar to exec(), but attached to the String prototype.
 */
const matchArray = "Hello, world!".match(/world/); // ['world', index: 7, input: 'Hello, world!', groups: undefined]

/**
 * replace()
 * Replaces the matched substring with a new substring.
 */
const replaced = "Hello, world!".replace(/world/, "everyone"); // "Hello, everyone!"

/**
 * -------------------------------------
 * Nuances and Advanced Use-Cases
 * -------------------------------------
 */

/**
 * 1. Capturing Groups
 * Using parentheses () creates capturing groups, useful for extracting part of the matched string.
 */
const groups = "1 + 2 = 3".match(/(\d) \+ (\d) = (\d)/);

/**
 * 2. Non-Capturing Groups
 * Add ?: at the start within the parentheses to make it a non-capturing group.
 */
const nonCapturing = "1 + 2 = 3".match(/(?:\d) \+ (?:\d) = (\d)/);

/**
 * 3. Lookahead and Lookbehind
 * Use lookahead (?=) and lookbehind (?<=) for conditional matching without consuming characters.
 */
const lookahead = "1 dollars".match(/\d(?= dollars)/); // ["1"]

/**
 * 4. Quantifiers
 * Quantifiers specify how many instances of a character, group, or character set must be present for a match.
 */
const quantifiers = "1000".match(/\d{2,4}/); // ["1000"]

/**
 * 5. Word Boundaries
 * The \b assertion finds a match at the boundary of a word within a string.
 */
const wordBoundary = "hello world".match(/\bworld\b/); // ["world"]

/**
 * 6. Global Flag Pitfall
 * When a regex with the 'g' flag is reused, searches start from lastIndex and thus can give unpredictable results.
 */
const globalPitfall = /a/g;
globalPitfall.lastIndex = 1;
const isPitfall = globalPitfall.test("abc"); // false

/**
 * 7. Escaping Characters
 * Backslash (\) is used to escape special characters in a regex pattern.
 */
const specialChars = "How much $ for a #?".match(/\$\sfor\sa\s#/); // ["$ for a #"]

/**
 * 8. Unicode Property Escapes
 * Use \p{Property=Value} to match characters with certain Unicode properties. Note that this requires the 'u' flag.
 */
const unicodeDigits = "123 ١٢٣".match(/\p{Numeric_Type=Digit}/gu); // ["1", "2", "3", "١", "٢", "٣"]

/**
 * 9. Modifiers
 * Multiple flags can be used together to compose complex search behaviors. For instance, /world/gi will perform a global, case-insensitive search.
 */
const multiFlag = /world/gi;

/**
 * 10. String Split
 * The split() method can also utilize regular expressions to break a string into an array.
 */
const splitArray = "apple, banana, cherry".split(/\,\s/); // ["apple", "banana", "cherry"]
