// Variables declaration
const menuToggle = document.querySelector(".toggle");
const menuToggle2 = document.querySelector(".toggle2");
const projects = document.querySelectorAll(".projects");
const projectsToggle = document.querySelector(".projects-hide");
const showcase = document.querySelector(".showcase");
const getHomePage = document.querySelector(".homePage");
const getSong = document.querySelector(".song");
const getVideo = document.querySelector("#Video");
const getIcon = document.querySelector(".iconPlay");
const getSongName = document.querySelector(".songName");

// Toggle projects
projectsToggle.addEventListener("click", () => {
  projects.forEach((project) => {
    if (project.style.display === "none") {
      project.style.display = "block";
      projectsToggle.innerHTML = "↓ Projects ↓";
    } else {
      project.style.display = "none";
      projectsToggle.innerHTML = "→ Projects ←";
    }
  });
});


// Reset icon
const resetIcon = () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
};

// Toggle the menu
menuToggle.addEventListener("click", () => {
  resetIcon();
});

// Menu for 320px resolution
menuToggle2.addEventListener("click", () => {
  resetIcon();
});

// Homepage
getHomePage.addEventListener("click", () => {
  resetIcon();
});

// Play the song - Pause the song - Show song name
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
