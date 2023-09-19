/**
 * ========================================================
 * IndexedDB
 * ========================================================
 * IndexedDB is a low-level API for storing large amounts of structured data like files and JSON objects.
 * It allows for the creation of database schemas, transactions, and significantly higher storage limits than localStorage and sessionStorage.
 *
 * Understanding and mastering IndexedDB will enable you to build web applications capable of storing a large amount of data
 * on the client-side, which is particularly useful for offline-first applications.
 */

/**
 * ========================================================
 * 1. Opening a Database
 * ========================================================
 * The 'indexedDB.open()' method is used to create or open an IndexedDB database.
 * The method takes two parameters: the name of the database and an optional version number.
 */
const request = indexedDB.open("myDatabase", 1);

// Event fired when the database is opened successfully
request.onsuccess = function (event) {
    const db = event.target.result;
};

// Event fired when the database couldn't be opened
request.onerror = function (event) {
    console.log("Could not open database:", event);
};

/**
 * ========================================================
 * 2. Object Stores
 * ========================================================
 * Object stores are essentially tables where records are stored.
 * An object store is created in the 'onupgradeneeded' event, which is triggered when the database is first created or
 * the version number changes.
 */
request.onupgradeneeded = function (event) {
    const db = event.target.result;
    // The 'keyPath' specifies the property of the object to be used as the key
    const objectStore = db.createObjectStore("myObjectStore", { keyPath: "id" });
};

/**
 * ========================================================
 * 3. CRUD Operations
 * ========================================================
 * The fundamental Create, Read, Update, and Delete (CRUD) operations can be performed in IndexedDB.
 */
// Create or Update (Upsert) a record
const addTransaction = db.transaction(["myObjectStore"], "readwrite");
const addStore = addTransaction.objectStore("myObjectStore");
addStore.add({ id: 1, name: "example" });

// Read a record by its key
const readTransaction = db.transaction(["myObjectStore"]);
const readStore = readTransaction.objectStore("myObjectStore");
const getRequest = readStore.get(1);
getRequest.onsuccess = function (event) {
    console.log("Data:", event.target.result);
};

/**
 * ========================================================
 * 4. Indexing
 * ========================================================
 * Indices allow you to build more complex queries, providing quick lookups and efficient ordering.
 */
const index = objectStore.createIndex("name", "name", { unique: false });

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Transaction Lifecycles
 * -------------------------
 * Transactions automatically commit if they are inactive for a brief period or when all requests have been executed.
 */

/**
 * 2. Cursor
 * ---------
 * Cursors allow you to iterate over multiple records, offering fine-grained control over the iteration process.
 */
const cursorRequest = objectStore.openCursor();
cursorRequest.onsuccess = function (event) {
    const cursor = event.target.result;
    if (cursor) {
        console.log("Entry:", cursor.value);
        cursor.continue();
    }
};

/**
 * 3. Error Handling
 * -----------------
 * Make use of the 'onerror', 'onabort', and 'oncomplete' events to handle various transaction outcomes.
 */
addTransaction.onerror = function () {
    console.log("Transaction failed");
};

/**
 * 4. Versioning
 * -------------
 * IndexedDB uses a versioning model. The 'onupgradeneeded' event is the only place where the database schema can be updated.
 */

/**
 * 5. Promised-based Libraries
 * ---------------------------
 * The native IndexedDB API is event-based, but libraries like 'idb' can be used to work with IndexedDB using Promises,
 * making it easier to manage asynchronous operations.
 */
