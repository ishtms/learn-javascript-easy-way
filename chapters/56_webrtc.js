/**
 * ========================================================
 * WebRTC
 * ========================================================
 * WebRTC allows real-time communication including audio, video, and data to be transferred
 * between browsers without requiring any plugins.
 */

/**
 * ========================================================
 * 1. Accessing Media Devices
 * ========================================================
 * Use 'navigator.mediaDevices.getUserMedia()' to request access to a user's camera and microphone.
 * This returns a promise that resolves to a MediaStream object.
 */
async function getMedia() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        const videoElement = document.querySelector("video");
        videoElement.srcObject = stream;
    } catch (error) {
        console.error("Error accessing media devices:", error);
    }
}
getMedia();

/**
 * ========================================================
 * 2. Creating a Peer Connection
 * ========================================================
 * The 'RTCPeerConnection' interface allows you to establish a peer-to-peer connection.
 */
const peerConnection = new RTCPeerConnection();

/**
 * ========================================================
 * 3. Exchanging Offer and Answer
 * ========================================================
 * The initiator creates an offer and the recipient responds with an answer.
 * The offer and answer mechanism is crucial for establishing the media configuration.
 */
async function createOffer() {
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    // Send offer to remote peer through signaling
}

async function createAnswer() {
    const offer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    // Send answer to remote peer through signaling
}

/**
 * ========================================================
 * 4. Handling ICE Candidates
 * ========================================================
 * ICE (Interactive Connectivity Establishment) candidates handle the exchange of network
 * information. This enables NAT traversal, allowing the connection to be made.
 */
peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
        // Typically, you'd send this candidate information to the remote peer over your signaling channel
    }
};

/**
 * ========================================================
 * 5. Handling Data Channels
 * ========================================================
 * Data Channels allow for the transfer of arbitrary data between peers.
 */
const dataChannel = peerConnection.createDataChannel("myChannel");
dataChannel.onmessage = (event) => {
    console.log("Received data:", event.data);
};

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. NAT Traversal
 * ----------------
 * STUN (Session Traversal Utilities for NAT) and TURN (Traversal Using Relays around NAT) servers help
 * in situations where peers are behind firewalls or NATs.
 */
const configuration = {
    iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        {
            urls: "turn:turn.example.org",
            username: "username",
            credential: "credential",
        },
    ],
};
const natPeerConnection = new RTCPeerConnection(configuration);

/**
 * 2. Simulcast
 * ------------
 * Simulcasting is the ability to send multiple resolutions of the video to the other peer.
 */
const transceiver = peerConnection.addTransceiver("video", {
    direction: "sendrecv",
    streams: [stream],
    sendEncodings: [
        { rid: "high", active: true, maxBitrate: 900000 },
        { rid: "medium", active: true, maxBitrate: 300000 },
        { rid: "low", active: true, maxBitrate: 100000 },
    ],
});

/**
 * 3. Security Concerns
 * ---------------------
 * Although WebRTC traffic is encrypted by default, always be cautious about security vulnerabilities.
 */

/**
 * 4. Adaptivity and Bandwidth Estimation
 * --------------------------------------
 * WebRTC can adapt video quality according to the current network conditions.
 * Advanced algorithms estimate the available bandwidth.
 */
// (No direct code example, this is handled by the WebRTC internals)

/**
 * 5. Use of WebRTC Libraries
 * ---------------------------
 * Libraries like SimplePeer or PeerJS can simplify the WebRTC implementation.
 * These libraries handle signaling, media capture, and various WebRTC features.
 */
// Example using PeerJS
const peer = new Peer();
peer.on("connection", (conn) => {
    conn.on("data", (data) => {
        console.log("Received", data);
    });
});
