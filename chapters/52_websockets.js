/**
 * ========================================================
 * WebSockets in JS
 * ========================================================
 * WebSockets enable real-time, full-duplex communication between a web client and a server.
 * This allows for instant data transfer, making them useful for applications like chat, gaming, and live updates.
 */

/**
 * ========================================================
 * 1. Creating a WebSocket
 * ========================================================
 * Use the WebSocket constructor to create a new WebSocket instance.
 * The argument is the URL of the WebSocket server you want to connect to.
 */
const socket = new WebSocket("ws://example.com");

/**
 * ========================================================
 * 2. Open Event
 * ========================================================
 * The 'open' event fires when the connection is successfully established.
 * You can start sending data to the server once this event fires.
 */
socket.addEventListener("open", () => {
    console.log("WebSocket connection opened");
    socket.send("Hello, server!");
});

/**
 * ========================================================
 * 3. Message Event
 * ========================================================
 * The 'message' event fires when a message is received from the WebSocket server.
 * The message data can be accessed via `event.data`.
 */
socket.addEventListener("message", (event) => {
    console.log(`Received from server: ${event.data}`);
});

/**
 * ========================================================
 * 4. Close Event
 * ========================================================
 * The 'close' event fires when the WebSocket connection is closed,
 * either due to the client's or server's request or because of an error.
 * The event object contains details like close code and reason.
 */
socket.addEventListener("close", (event) => {
    console.log(`Connection closed: ${event.code}`);
});

/**
 * ========================================================
 * 5. Error Event
 * ========================================================
 * The 'error' event fires when an error occurs.
 * Although the event does not carry detailed information,
 * it is often accompanied by a 'close' event that gives additional context.
 */
socket.addEventListener("error", (error) => {
    console.error(`WebSocket Error: ${error}`);
});

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Ping/Pong Frames
 * -------------------
 * Some WebSocket servers use ping/pong frames to keep the connection alive.
 * In most cases, the browser will automatically reply to "ping" frames with "pong" frames.
 * No additional client-side handling is needed.
 */

/**
 * 2. Subprotocols
 * ---------------
 * You can specify one or more subprotocols while creating a WebSocket.
 * The server will pick one among those and will use it for further communication.
 */
const customSocket = new WebSocket("ws://example.com", ["subprotocol-1", "subprotocol-2"]);

/**
 * 3. Secure WebSockets (WSS)
 * --------------------------
 * Always prefer using Secure WebSockets (WSS) when dealing with sensitive or secure data.
 */
const secureSocket = new WebSocket("wss://secure-example.com");

/**
 * 4. Binary Data
 * -------------
 * WebSockets can also handle binary data, such as ArrayBuffer and Blob objects.
 */
const binaryData = new ArrayBuffer(256);
socket.send(binaryData);

/**
 * 5. Buffering and Back-pressure
 * ------------------------------
 * If you're sending large or numerous pieces of data, you might run into issues with buffering.
 * The `bufferedAmount` property tells how many bytes are currently buffered and awaiting transmission.
 */
if (socket.bufferedAmount === 0) {
    socket.send("This message will be sent immediately");
} else {
    // Handle back-pressure, possibly by buffering data or reducing the sending rate.
}
