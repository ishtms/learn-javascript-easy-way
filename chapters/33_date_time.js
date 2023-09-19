/**
 * ========================================================
 * Date and Time
 * ========================================================
 */

/**
 * ========================================================
 * Creating Date Objects
 * ========================================================
 * JavaScript provides the `Date` object for working with date and time.
 * You can create a `Date` object in several ways.
 */

// Current date and time
const now = new Date();

// Specific date (Year, Month-1, Day, Hours, Minutes, Seconds, Milliseconds)
const specificDate = new Date(2023, 8, 19, 12, 30, 0, 0); // Sep 19, 2023, 12:30:00

// From a timestamp (milliseconds since January 1, 1970, 00:00:00 UTC)
const fromTimestamp = new Date(1632066000000);

// From a date string
const fromString = new Date("September 19, 2023 12:30:00");

/**
 * ========================================================
 * Getting Components
 * ========================================================
 * JavaScript offers various methods to retrieve individual date and time components.
 */

const year = now.getFullYear(); // Outputs: 2023 (or current year)
const month = now.getMonth(); // Outputs: 8 (0-indexed, January is 0)
const day = now.getDate(); // Outputs: 19 (or current day)

/**
 * ========================================================
 * Setting Components
 * ========================================================
 * You can also manipulate individual date and time components using setters.
 */

now.setFullYear(2024); // Changes the year to 2024
now.setHours(13); // Changes the hour to 13 (1 PM)

/**
 * ========================================================
 * Formatting Dates
 * ========================================================
 * JavaScript provides methods to format Date objects into more readable strings.
 */

const formatted = now.toDateString(); // Outputs: "Tue Sep 19 2024" (or similar format)

/**
 * ========================================================
 * Nuances and Advanced Use-Cases
 * ========================================================
 */

/**
 * 1. Timezone
 *
 * By default, Date objects are created in the client's local timezone.
 * But you can also use UTC (Coordinated Universal Time).
 */
const utcHours = now.getUTCHours();

/**
 * 2. Daylight Saving
 *
 * JavaScript automatically adjusts for daylight saving time changes.
 */

/**
 * 3. Invalid Date
 *
 * A Date object initialized with incorrect parameters will produce an "Invalid Date" object.
 *
 * NOTE: Some browsers may return the below as a valid date, setting date to the 00:00:00 Jan 1, 2014
 */
const invalidDate = new Date("john-doe 2014").toString();

/**
 * 4. Leap Year Considerations
 *
 * The Date object automatically accounts for leap years.
 */
const feb29_2024 = new Date(2024, 1, 29); // Valid because 2024 is a leap year

/**
 * 5. Parsing Strings
 *
 * Different browsers may parse date strings differently, so it's safer to avoid relying on this.
 * Instead, use the standardized formats when possible.
 */

/**
 * 6. ISO 8601 Format
 *
 * For cross-browser compatibility, use ISO 8601 formatted strings.
 */
const isoString = now.toISOString(); // Outputs: "2023-09-19T09:30:00.000Z" (or similar)

/**
 * 7. Performance Considerations
 *
 * Creating Date objects in loops can be a performance hit, so try to minimize this where possible.
 */

/**
 * 8. Libraries for Date Manipulation
 *
 * For more complex date-time operations, libraries like `moment.js` or `date-fns` offer additional functionalities.
 */

// Example:
const moment = require("moment"); // Import Moment.js
moment("2023-09-19").format("dddd"); // Outputs: "Tuesday"
