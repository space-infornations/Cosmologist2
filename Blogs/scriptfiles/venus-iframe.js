// Fullscreen functionality for the iframe
document
  .getElementById("fullscreen-btn")
  .addEventListener("click", function () {
    var iframe = document.getElementById("custom-venus-iframe");
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      // Firefox
      iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
      // IE/Edge
      iframe.msRequestFullscreen();
    }
  });

// Redirect functionality
document.getElementById("redirect-btn").addEventListener("click", function () {
  window.location.href = "Venus-video.html"; // Replace with the URL to which you want to redirect
});
