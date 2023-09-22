/**
 * ========================================================
 * Web APIs - Part 2
 * ========================================================
 */

/**
 * ========================================================
 * 1. WebSocket API
 * ========================================================
 * WebSocket provides full-duplex communication channels over a single, long-lived connection.
 */
const ws = new WebSocket("ws://example.com/socketserver");
ws.onopen = () => {
    ws.send("Hello Server!");
};
ws.onmessage = (event) => {
    console.log(`Server says: ${event.data}`);
};
ws.onclose = () => {
    console.log("Connection closed");
};

/**
 * ========================================================
 * 2. DOM API
 * ========================================================
 * The DOM API allows you to programmatically interact with HTML and XML documents.
 */
// Adding a new element
const newElement = document.createElement("div");
newElement.textContent = "Hello, World!";
document.body.appendChild(newElement);

/**
 * ========================================================
 * 3. Drag and Drop API
 * ========================================================
 * This API allows you to make elements draggable and to capture drop events.
 */
document.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
});
document.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const target = document.getElementById(data);
    event.target.appendChild(target);
});

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. WebSocket Reconnection
 * --------------------------
 * In real-world scenarios, WebSocket connections can drop. A common practice is to implement
 * reconnection logic.
 */
let ws;
function connect() {
    ws = new WebSocket("ws://example.com/socketserver");
    ws.onopen = () => {
        ws.send("Hello Server!");
    };
    ws.onmessage = (event) => {
        console.log(`Server says: ${event.data}`);
    };
    ws.onclose = () => {
        console.log("Connection closed. Reconnecting...");
        setTimeout(connect, 1000);
    };
}
connect();

/**
 * 2. Using DOM API with Fragments
 * --------------------------------
 * Document fragments let you create a subtree of elements and insert them into the DOM
 * as a single operation.
 */
const fragment = document.createDocumentFragment();
const elem1 = document.createElement("p");
elem1.textContent = "Paragraph 1";
const elem2 = document.createElement("p");
elem2.textContent = "Paragraph 2";
fragment.appendChild(elem1);
fragment.appendChild(elem2);
document.body.appendChild(fragment);

/**
 * 3. Drag and Drop with Custom Images
 * -----------------------------------
 * You can customize the drag image by setting the `dragImage` property on the dataTransfer object.
 */
document.addEventListener("dragstart", (event) => {
    const img = new Image();
    img.src = "path/to/image.png";
    event.dataTransfer.setDragImage(img, 10, 10);
});
