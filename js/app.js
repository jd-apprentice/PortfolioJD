// Variables
const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const getSong = document.querySelector(".song");
const getIcon = document.querySelector(".iconPlay");

// Toggle the menu
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

// Play the song - Pause the song
getIcon.addEventListener("click", () => {
  if (getSong.paused) {
    getSong.play();
    getIcon.src = "img/pause.png";
  } else {
    getSong.pause();
    getIcon.src = "img/play.png";
  }
});

// Song volume
getSong.volume = 0.1;
getSong.display = "none";
