const seasons = document.querySelectorAll(".season");
const bgs = document.querySelectorAll(".bg");
const textAnime = document.querySelectorAll(".text-anime");

seasons.forEach((season) => {
  switch (season.id) {
    case "Winter":
    case "Spring":
    case "Summer":
    case "Fall":
      season.style.backgroundColor = "rgba(0, 0, 255, 0.3)";
      season.innerHTML = season.id;
      break;
  }

  season.addEventListener("mouseenter", () => {
    season.style.opacity = "0";
    if (season.id === "Winter") {
      bgs.forEach((bg) => {
        if (bg.classList.contains("Winter")) {
          bg.style.filter = "none";
        }
      });
    }
    textAnime.forEach((text) => {
      text.style.display = "block";
    });
  });

  season.addEventListener("mouseleave", () => {
    season.style.opacity = "0.5";
    bgs.forEach((bg) => {
      if (season.id === "Winter" && bg.classList.contains("Winter")) {
        bg.style.filter = "blur(8px)";
      } else {
        bg.style.filter = "none";
      }
    });
    textAnime.forEach((text) => {
      text.style.display = "block";
    });
  });
});
