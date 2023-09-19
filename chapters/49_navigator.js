/**
 * ========================================================
 * JavaScript Navigator Object
 * ========================================================
 * The Navigator object provides information about the user's browser and system.
 * It is essential for browser feature detection, analytics, and browser-specific functionalities.
 */

/**
 * ========================================================
 * 1. Browser Information
 * ========================================================
 * The Navigator object has several properties to help identify specific browser capabilities and information.
 */
const appName = navigator.appName; // Get the browser's application name
const appVersion = navigator.appVersion; // Get the version information of the browser
const userAgent = navigator.userAgent; // Retrieve the user agent string sent by the browser to the server
const platform = navigator.platform; // Get the platform on which the browser is running

/**
 * ========================================================
 * 2. Feature Detection
 * ========================================================
 * It's generally better to detect specific features rather than relying on browser identification.
 */
if ("geolocation" in navigator) {
    // The browser supports the Geolocation API
}

/**
 * ========================================================
 * 3. Online/Offline Status
 * ========================================================
 * The 'onLine' property indicates whether the browser is currently online or offline.
 */
const isOnline = navigator.onLine; // Returns true if online, false if offline

/**
 * ========================================================
 * 4. Language Settings
 * ========================================================
 * You can access the browser's language settings to localize your application accordingly.
 */
const language = navigator.language || navigator.userLanguage; // Get the preferred language

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Vendor Prefixes
 * ------------------
 * Be cautious of vendor-specific prefixes when dealing with certain CSS properties or JavaScript APIs.
 */
const isWebkit = "webkitAppearance" in document.documentElement.style; // Check if the browser uses WebKit

/**
 * 2. Do Not Rely Solely on User Agent
 * -----------------------------------
 * User agent strings can be easily spoofed, making them unreliable for feature detection.
 */

/**
 * 3. Register Protocol Handlers
 * -----------------------------
 * The 'registerProtocolHandler' method allows web apps to register as handlers for specific URL schemes.
 */
if ("registerProtocolHandler" in navigator) {
    navigator.registerProtocolHandler("web+custom", "handler.php?uri=%s", "My App");
}

/**
 * 4. Battery Status
 * -----------------
 * Some browsers support the Battery Status API, enabling you to retrieve information about the system's battery status.
 */
if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
        console.log(`Battery level: ${battery.level * 100}%`);
    });
}

/**
 * 5. Clipboard Access
 * -------------------
 * The Clipboard API provides asynchronous methods to interact with the clipboard.
 */
if (navigator.clipboard) {
    navigator.clipboard.writeText("Text to copy").then(() => {
        console.log("Text successfully copied to clipboard");
    });
}

/**
 * 6. Media Devices
 * ----------------
 * The 'mediaDevices' property provides methods to access connected media devices like microphones and cameras.
 */
if ("mediaDevices" in navigator) {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {
        // Handle the media stream
    });
}

/**
 * 7. Connection Information
 * --------------------------
 * The 'connection' property gives information about the system's network connection, such as type and speed.
 */
if ("connection" in navigator) {
    const { type, effectiveType } = navigator.connection;
    console.log(`Connection type: ${type}, effective type: ${effectiveType}`);
}
