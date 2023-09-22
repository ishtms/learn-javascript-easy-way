/**
 * ========================================================
 * User Timing API
 * ========================================================
 * The User Timing API is an advanced tool that allows you to measure the duration of specific operations
 * within your JavaScript code. It's excellent for performance analysis, debugging, and monitoring.
 */

/**
 * ========================================================
 * 1. mark() - Create a High-Resolution Timestamp
 * ========================================================
 * The `mark` method enables you to create a named, high-resolution timestamp that can be used for measurements.
 */
performance.mark("startOperation"); // Mark the start

// Some code you want to measure
for (let i = 0; i < 100000; i++) {
    // Do something
}

performance.mark("endOperation"); // Mark the end

/**
 * ========================================================
 * 2. measure() - Measure the Time Between Marks
 * ========================================================
 * The `measure` method calculates the time difference between two named marks.
 */
performance.measure("operationDuration", "startOperation", "endOperation");

/**
 * ========================================================
 * 3. getEntriesByType() - Retrieve Timing Entries
 * ========================================================
 * This function returns an array of PerformanceEntry objects based on the type specified.
 */
const measurements = performance.getEntriesByType("measure"); // Get all 'measure' type entries

/**
 * ========================================================
 * 4. Clearing Marks and Measures
 * ========================================================
 * To prevent memory leaks or unintended calculations, it's good practice to clear your marks and measures.
 */
performance.clearMarks("startOperation"); // Clear specific mark
performance.clearMarks("endOperation"); // Clear specific mark
performance.clearMeasures("operationDuration"); // Clear specific measure

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. High-Resolution Time
 * -----------------------
 * The User Timing API provides microsecond-precision timestamps, offering higher resolution compared to Date.now().
 */

/**
 * 2. Performance Observer
 * ------------------------
 * The Performance Observer API allows you to "listen" for specific performance events.
 */
const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    for (const entry of entries) {
        console.log(`Name: ${entry.name}, Duration: ${entry.duration}`);
    }
});
observer.observe({ entryTypes: ["measure"] });

/**
 * 3. User Timing in the DevTools
 * -------------------------------
 * Many browsers offer visualization tools in the DevTools for inspecting marks and measures.
 */

/**
 * 4. Server Timing API Integration
 * --------------------------------
 * The User Timing API can be integrated with the Server Timing API to analyze end-to-end application performance.
 */

/**
 * 5. Combining with Navigation Timing API
 * ----------------------------------------
 * The Navigation Timing API can be used alongside the User Timing API to assess the full lifecycle of a web page.
 */

/**
 * 6. Resource Timing API Integration
 * -----------------------------------
 * Pair User Timing marks with Resource Timing data to gauge the performance of specific resource loads.
 */

/**
 * 7. Custom Metrics
 * -----------------
 * The User Timing API is flexible enough to define custom performance metrics that are specific to your application.
 */

/**
 * 8. Multiple Measurements
 * -------------------------
 * Multiple measurements can be created using the same name. You can differentiate them using other properties like `startTime`.
 */
performance.mark("startAnotherOperation");
// Some more code you want to measure
performance.mark("endAnotherOperation");
performance.measure("operationDuration", "startAnotherOperation", "endAnotherOperation");

/**
 * The User Timing API is an indispensable tool for optimizing your web applications, offering precise timing
 * measurements and a wealth of nuances and advanced techniques for thorough performance analysis.
 */
