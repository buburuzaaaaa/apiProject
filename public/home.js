var video = document.getElementById('vid');

/* Setting up the constraint */
var facingMode = 'user'; // Can be 'user' or 'environment' to access back or front camera (NEAT!)
var constraints = {
  audio: false,
  video: {
    facingMode: facingMode,
  },
};
let vidOn;
/* Stream it to video element */
navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
  video.srcObject = stream;
  vidOn = true;
});
function vidToggle() {
  if (vidOn) {
    let tracks = video.srcObject.getTracks();
    tracks[0].stop();
    video.srcObject = null;
    vidOn = false;
  } else {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function success(stream) {
        video.srcObject = stream;
        vidOn = true;
      });
  }
}
