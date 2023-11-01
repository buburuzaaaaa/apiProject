var video = document.getElementsByClassName('vid');

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
  for (let i in video) {
    video[i].srcObject = stream;
  }
  vidOn = true;
});
function vidToggle() {
  if (vidOn) {
    let tracks = video[0].srcObject.getTracks();
    tracks[0].stop();
    video[0].srcObject = null;
    video[1].srcObject = null;

    video[2].srcObject = null;

    vidOn = false;
  } else {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function success(stream) {
        for (let i in video) {
          video[i].srcObject = stream;
        }
        vidOn = true;
      });
  }
}
