/**
 * ========================================================
 * JavaScript Drag and Drop API
 * ========================================================
 * Enables interactive Drag-and-Drop interfaces in web applications.
 */

/**
 * ========================================================
 * 1. Making an Element Draggable
 * ========================================================
 * To make an element draggable, set its 'draggable' attribute to true.
 * This enables the browser's native drag-and-drop feature for the element.
 */
const draggableElem = document.getElementById("draggable");
draggableElem.setAttribute("draggable", "true");

/**
 * ========================================================
 * 2. Drag Events
 * ========================================================
 * Drag events are fired on both the draggable target and the drop target.
 * The 'dragstart' event is essential for initiating a drag operation.
 */
// Drag start event
draggableElem.addEventListener("dragstart", (event) => {
    // Store some meta-data to be used during the 'drop' event
    event.dataTransfer.setData("text/plain", draggableElem.id);
});

/**
 * ========================================================
 * 3. Dropping an Element
 * ========================================================
 * To allow an element to act as a drop target, you must prevent the default handling of the element during dragover.
 */
const dropZone = document.getElementById("dropZone");

// Allow the drop by preventing default behavior
dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
});

// Handle the drop
dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElem = document.getElementById(data);
    dropZone.appendChild(draggedElem);
});

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Custom Drag Image
 * --------------------
 * You can set a custom image to appear next to the cursor while dragging.
 */
draggableElem.addEventListener("dragstart", (event) => {
    const img = new Image();
    img.src = "drag-image.png";
    event.dataTransfer.setDragImage(img, 10, 10);
});

/**
 * 2. Drag Handles
 * ----------------
 * You can make only a part of an element act as a drag handle.
 */
const handle = document.getElementById("handle");
handle.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", draggableElem.id);
    event.stopPropagation(); // Prevent dragstart from bubbling up to parent elements
});

/**
 * 3. Nested Drop Targets
 * ----------------------
 * Handling dragover and drop events properly when there are nested drop targets can be tricky.
 * Stop propagation to ensure only the innermost target gets the event.
 */
const nestedZone = document.getElementById("nestedZone");
nestedZone.addEventListener("dragover", (event) => {
    event.stopPropagation();
    event.preventDefault(); // Still required to allow drop
});
nestedZone.addEventListener("drop", (event) => {
    event.stopPropagation();
    event.preventDefault(); // Execute your nested drop logic here
});

/**
 * 4. Drag and Drop File Upload
 * ----------------------------
 * You can use drag and drop for file uploads. It enhances user experience significantly.
 */
dropZone.addEventListener("drop", (event) => {
    const files = event.dataTransfer.files;
    Array.from(files).forEach((file) => {
        // Your file processing logic here
        console.log(`Uploaded file: ${file.name}`);
    });
});

/**
 * HTML Code for testing the above -

<!DOCTYPE html>
<html>
<head>
  <title>Drag and Drop Example</title>
</head>
<body>
  <div id="draggable">Drag Me!</div>
  <div id="dropZone">Drop Here!</div>
  <div id="handle">Drag Handle</div>
  <div id="nestedZone">Nested Drop Zone</div>
  <script src="your-script.js"></script>
</body>
</html>

 */
