/**
 * ========================================================
 * Lazy Loading
 * ========================================================
 * Lazy loading is a design pattern commonly used to defer the loading of an object or resource until the time it is needed.
 * This can be particularly helpful in improving performance for web applications.
 */

/**
 * ========================================================
 * Basic Lazy Loading of Images
 * ========================================================
 * The most common use case is lazy loading of images. Below is a simple example using JavaScript and HTML's native
 * 'loading' attribute set to 'lazy'.
 */

// HTML code
// <img src="image.jpg" loading="lazy" alt="example image">

/**
 * This will defer the loading of the image until the user scrolls to the point where the image is visible.
 * You don't need any extra JavaScript to make this work.
 */

/**
 * ========================================================
 * Lazy Loading with Intersection Observer
 * ========================================================
 * A more robust approach to lazy loading involves the Intersection Observer API. This enables you to dynamically
 * load content as it becomes visible within the viewport.
 */

// HTML code
// <img class="lazy" data-src="image.jpg" alt="example image">

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute("data-src");
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll(".lazy").forEach((img) => observer.observe(img));

/**
 * In this example, the Intersection Observer observes all images with the class "lazy". When an image intersects
 * with the viewport, it sets the image source and unobserves the image to stop watching it.
 */

/**
 * ========================================================
 * Lazy Loading JavaScript Modules
 * ========================================================
 * Lazy loading can also be applied to JavaScript modules. This helps to reduce the initial load time of a web application.
 */

// Using dynamic imports
async function loadModule() {
    const { myFunction } = await import("./myModule.js");
    myFunction();
}

// Invoking the function
loadModule();

/**
 * The 'import()' function dynamically loads the module only when the 'loadModule' function is invoked.
 * This can be helpful in reducing the initial bundle size of your application.
 */

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Fallback for Older Browsers
 * ------------------------------
 * Native lazy loading is not supported in all browsers. Having a fallback mechanism ensures that
 * lazy loading still works on older browsers.
 */

// Using Intersection Observer as a fallback
if ("loading" in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach((img) => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback to Intersection Observer
}

/**
 * In this code snippet, we check if the browser supports native lazy loading. If it does, we set the image
 * source directly. Otherwise, we fallback to using Intersection Observer.
 */

/**
 * 2. Loading Threshold
 * ---------------------
 * With Intersection Observer, you can set a threshold that defines when to start loading content before it
 * actually comes into the viewport.
 */

const observerWithThreshold = new IntersectionObserver(
    (entries, observer) => {
        // Logic here
    },
    { rootMargin: "200px" }
);

/**
 * The rootMargin option sets a 200px margin outside of the viewport, effectively starting the image loading
 * 200px before the user actually scrolls to the image.
 */

/**
 * 3. Placeholder Images
 * ----------------------
 * You can display a low-quality placeholder or a loading spinner until the actual content is loaded.
 */

// HTML code
// <img class="lazy" data-src="high-quality.jpg" src="low-quality.jpg">

/**
 * The low-quality image will display first and will be replaced by the high-quality image once it is loaded.
 */

/**
 * 4. Lazy Loading Iframes
 * ------------------------
 * Lazy loading can be applied to iframes as well, and it follows a similar pattern as that of images.
 */

// HTML code
// <iframe src="video.mp4" loading="lazy"></iframe>

/**
 * The iframe content will only start loading when it gets near the viewport, thereby improving page load speed.
 */

/**
 * 5. Lazy Loading Background Images
 * ---------------------------------
 * Background images set via CSS can also be lazy-loaded using Intersection Observer.
 */

const bgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("bg-loaded");
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll(".bg-lazy").forEach((el) => bgObserver.observe(el));

// CSS
// .bg-loaded {
//   background-image: url('high-quality.jpg');
// }

/**
 * The 'bg-loaded' class contains the actual background image that will be applied once the element comes into view.
 */
