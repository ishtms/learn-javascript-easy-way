/**
 * ========================================================
 * Web Workers
 * ========================================================
 * Web Workers allow you to run scripts in the background.
 * This helps in offloading computational tasks and thus keeps the UI responsive.
 */

/**
 * ========================================================
 * 1. Creating a Web Worker
 * ========================================================
 * Use the Worker constructor to spawn a new worker.
 * The argument to this constructor is the path to the worker script.
 */
const worker = new Worker("worker-script.js");

/**
 * ========================================================
 * 2. Sending Messages to the Worker
 * ========================================================
 * The `postMessage` method is used to send messages from the main thread to the worker.
 * The data sent can be any structure that is cloneable or transferable.
 */
worker.postMessage("Hello, Worker!");

/**
 * ========================================================
 * 3. Receiving Messages from the Worker
 * ========================================================
 * Listen for the `message` event to receive messages from the worker.
 * Use `event.data` to access the data sent by the worker.
 */
worker.addEventListener("message", (event) => {
    console.log(`Received from worker: ${event.data}`);
});

/**
 * ========================================================
 * 4. Terminating a Worker
 * ========================================================
 * The `terminate` method can be used to immediately terminate a worker.
 * Use this method with caution as it stops all worker activities without any cleanup.
 */
worker.terminate();

/**
 * ========================================================
 * 5. Error Handling
 * ========================================================
 * The `error` event is triggered when an uncaught exception occurs within the worker.
 * This allows you to gracefully handle errors and possibly recover from them.
 */
worker.addEventListener("error", (error) => {
    console.error(`Worker Error: ${error.message}`);
});

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Transferable Objects
 * -----------------------
 * Transferable objects are used when you want to hand off ownership of an object to another context like a worker.
 * This allows faster transfer of complex structures like typed arrays.
 */
const buffer = new ArrayBuffer(8);
worker.postMessage(buffer, [buffer]);

/**
 * 2. Shared Workers
 * -----------------
 * Shared Workers allow sharing a single worker instance between multiple contexts such as different windows or even workers.
 */
const sharedWorker = new SharedWorker("shared-worker-script.js");
sharedWorker.port.start();

/**
 * 3. Worker Scope
 * ---------------
 * Inside a Web Worker, the global scope is not the `window` object.
 * While you can't access the DOM, some web APIs like `fetch` and `IndexedDB` are still available.
 */

/**
 * 4. Importing Scripts
 * --------------------
 * You can import external JavaScript files into your worker using `importScripts`.
 * This allows you to reuse code and manage dependencies.
 */
// Inside worker-script.js
importScripts("external-script.js");

/**
 * 5. Inline Workers
 * -----------------
 * If your worker logic is small or generated dynamically, you can use inline workers created from Blob URLs or Data URLs.
 */
const blob = new Blob(['postMessage("Hello from inline worker!");'], { type: "text/javascript" });
const inlineWorker = new Worker(URL.createObjectURL(blob));

/**
 * 6. Message Channels
 * -------------------
 * For complex, two-way communications between your main thread and worker, Message Channels can be used.
 */
const channel = new MessageChannel();
worker.postMessage("Initiate MessageChannel communication", [channel.port2]);
