/**
 * ========================================================
 * Web APIs - Part 3
 * ========================================================
 */

/**
 * ========================================================
 * 1. Audio and Video API
 * ========================================================
 * The HTML5 Audio and Video APIs allow for playback of multimedia.
 */
const audio = new Audio("audio_file.mp3");
audio.play();

const video = document.querySelector("video");
video.play();

/**
 * ========================================================
 * 2. Canvas API
 * ========================================================
 * The Canvas API provides a way to draw 2D graphics.
 */
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 80, 80);

/**
 * ========================================================
 * 3. RequestAnimationFrame API
 * ========================================================
 * Used for creating smooth animations.
 */
function animate() {
    // Animation code
    requestAnimationFrame(animate);
}
animate();

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Controlling Audio and Video Playback
 * ---------------------------------------
 * You can control the playback rates, volume, and other properties.
 */
audio.volume = 0.5;
audio.playbackRate = 1.5;

/**
 * 2. Canvas Transformations
 * -------------------------
 * Canvas allows you to perform complex transformations like scaling and rotations.
 * We'll talk more about canvas, in the next chapter.
 */
ctx.save();
ctx.rotate((Math.PI / 180) * 45);
ctx.fillRect(100, 0, 50, 50);
ctx.restore();

/**
 * 3. Animating with RequestAnimationFrame
 * ---------------------------------------
 * It's best to use requestAnimationFrame over setInterval for smoother animations.
 */
let x = 0;
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, 0, 50, 50);
    x += 1;
    requestAnimationFrame(animate);
}
animate();
