// Variables
const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const getSong = document.querySelector(".song");
const getVideo = document.querySelector("#Video");
const getIcon = document.querySelector(".iconPlay");

// Toggle the menu
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

// Play the song - Pause the song
getIcon.addEventListener("click", () => {
  if (getSong.paused || getVideo.paused) {
    getSong.play();
    getVideo.play();
    getIcon.src = "img/pause.png";
  } else {
    getSong.pause();
    getVideo.pause();
    getIcon.src = "img/play.png";
  }
});

// Song volume
getSong.volume = 0.1;
getSong.display = "none";
