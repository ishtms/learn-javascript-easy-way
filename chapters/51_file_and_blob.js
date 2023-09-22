/**
 * ========================================================
 * File and Blob
 * ========================================================
 * The File and Blob APIs open up new possibilities for dealing with files and binary data,
 * enabling a range of functionalities from basic file I/O to advanced techniques like streaming and object serialization.
 */

/**
 * ========================================================
 * File API
 * ========================================================
 * The File API allows you to work with files in web applications,
 * making it possible to read the contents of files and navigate their structure.
 */

/**
 * ========================================================
 * 1. Creating a File
 * ========================================================
 * Creating a File object is similar to creating a Blob. The File constructor
 * allows you to add additional metadata, such as the file name and MIME type.
 */
const file = new File(["Hello, again!"], "hello.txt", { type: "text/plain" });

/**
 * ========================================================
 * 2. Reading a File
 * ========================================================
 * The FileReader API is commonly used to read the contents of a File object.
 */
const fileReader = new FileReader();
fileReader.onload = function (event) {
    console.log(event.target.result); // Outputs "Hello, again!"
};
fileReader.readAsText(file);

/**
 * ========================================================
 * 3. Uploading a File
 * ========================================================
 * Files can be uploaded using the Fetch API or XMLHttpRequest.
 */
fetch("https://example.com/upload", {
    method: "POST",
    body: file,
});

/**
 * ========================================================
 * 4. File Input Element
 * ========================================================
 * The <input type="file"> element allows users to select files from their device,
 * which can then be read and manipulated using JavaScript.
 */
const fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", (event) => {
    const selectedFile = event.target.files[0];
    // Further processing of the File object
});

/**
 * ========================================================
 * Blob API
 * ========================================================
 * The Blob API is used for handling binary data directly,
 * enabling you to create, read and manipulate binary data in a performant and safe manner.
 */

/**
 * ========================================================
 * 1. Creating a Blob
 * ========================================================
 * Blobs can be created using the Blob constructor.
 * The constructor takes an array of data and an optional options object.
 */
const blob = new Blob(["Hello, world!"], { type: "text/plain" });

/**
 * ========================================================
 * 2. Reading a Blob
 * ========================================================
 * The FileReader API can read Blob content just like it does with File objects.
 */
const blobReader = new FileReader();
blobReader.onload = function (event) {
    console.log(event.target.result); // Outputs "Hello, world!"
};
blobReader.readAsText(blob);

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Blob URLs
 * ------------
 * Temporary URLs can be created for Blobs and Files for use within the application.
 */
const url = URL.createObjectURL(blob);
// Perform operations with the URL (e.g., assign it to an <img> or <a> element)
URL.revokeObjectURL(url); // Free up resources by releasing the URL

/**
 * 2. Slicing a Blob
 * -----------------
 * Blobs can be sliced to create new Blob objects from a subset of their data.
 */
const slicedBlob = blob.slice(0, 5); // Contains the text "Hello"

/**
 * 3. Blob Streaming
 * -----------------
 * The Blob object can be streamed using the ReadableStream API, if supported.
 */
if (blob.stream) {
    const stream = blob.stream();
    // Perform operations using the stream
}

/**
 * 4. Object Serialization
 * ------------------------
 * Blobs can store complex objects, thanks to JSON serialization.
 */
const objBlob = new Blob([JSON.stringify({ key: "value" })], {
    type: "application/json",
});
