/**
 * ========================================================
 * Canvas API
 * ========================================================
 * The Canvas API allows for dynamic, scriptable rendering of 2D and 3D graphics.
 */

/**
 * ========================================================
 * 1. Basic Setup
 * ========================================================
 * Create a canvas element in HTML and get its context in JavaScript.
 */
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

/**
 * ========================================================
 * 2. Drawing Shapes
 * ========================================================
 * Draw simple shapes like rectangles, circles, and lines.
 */

// Draw a rectangle
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 100, 50);

// Draw a circle
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();

// Draw a line
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(100, 10);
ctx.stroke();

/**
 * ========================================================
 * 3. Text Rendering
 * ========================================================
 * Display text on the canvas. Can control font, alignment, and more.
 */
ctx.font = "30px Arial";
ctx.fillText("Hello Canvas", 50, 200);
ctx.textAlign = "center"; // Other options: 'left', 'right'
ctx.fillText("Centered Text", canvas.width / 2, canvas.height / 2);

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Pixel Manipulation
 * ----------------------
 * Manipulate individual pixels for advanced effects like filters.
 */
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
const data = imageData.data;
for (let i = 0; i < data.length; i += 4) {
    // Invert colors
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
}
ctx.putImageData(imageData, 0, 0);

/**
 * 2. Transformations
 * -------------------
 * Apply transformations like scale, rotate, and translate.
 * Always save and restore the context when doing transformations.
 */
ctx.save();
ctx.scale(0.5, 0.5);
ctx.rotate((Math.PI / 180) * 25);
ctx.translate(100, 0);
// Draw transformed rectangle
ctx.fillStyle = "purple";
ctx.fillRect(50, 50, 100, 50);
ctx.restore();

/**
 * 3. Animation
 * -------------
 * Use `requestAnimationFrame` for smooth animations.
 * This creates a game loop for continuous drawing.
 */
let xPos = 0;
function drawFrame() {
    // Clear canvas and update drawings
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(xPos, 10, 50, 50);
    xPos++;
    requestAnimationFrame(drawFrame);
}
requestAnimationFrame(drawFrame);

/**
 * 4. OffscreenCanvas
 * -------------------
 * Perform canvas rendering in a web worker to offload the main thread.
 */
if (window.OffscreenCanvas) {
    const offscreen = new OffscreenCanvas(100, 100);
    const offscreenCtx = offscreen.getContext("2d");
    offscreenCtx.fillStyle = "orange";
    offscreenCtx.fillRect(0, 0, 100, 100);
}

/**
 * 5. Path2D Object
 * ----------------
 * Use Path2D objects to cache complex paths and draw them later.
 * This can improve performance in animations.
 */
const path = new Path2D();
path.moveTo(10, 10);
path.lineTo(100, 10);
path.lineTo(100, 100);
ctx.stroke(path);
