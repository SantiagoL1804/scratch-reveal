const video = document.getElementById("video");

const furnitureArray = [...document.getElementsByClassName("furniture")];

const furnitureDisplayBg = document.querySelector(
  ".furniture-display-background"
);
const detailContainer = document.querySelector(".detail-container");

const closeBtn = document.querySelector(".close-btn");

function init() {
  document.addEventListener("DOMContentLoaded", function () {
    video.addEventListener("timeupdate", function () {
      if (video.currentTime >= 2.5 && video.currentTime < 3.5) {
        // Lampara de techo
        furnitureArray[0].style.zIndex = 1;
        furnitureArray[0].style.opacity = 1;
      } else if (video.currentTime >= 5.3 && video.currentTime < 7.2) {
        // Cuadro
        furnitureArray[1].style.zIndex = 1;
        furnitureArray[1].style.opacity = 1;
      } else if (video.currentTime >= 11 && video.currentTime < 13) {
        // Reposera
        furnitureArray[2].style.zIndex = 1;
        furnitureArray[2].style.opacity = 1;
      } else if (video.currentTime >= 21 && video.currentTime < 24) {
        // Cama
        furnitureArray[3].style.zIndex = 1;
        furnitureArray[3].style.opacity = 1;
      } else if (video.currentTime >= 27 && video.currentTime < 28.5) {
        // Silla
        furnitureArray[4].style.zIndex = 1;
        furnitureArray[4].style.opacity = 1;
      } else {
        furnitureArray.forEach((furn) => {
          furn.style.zIndex = -1;
          furn.style.opacity = 0;
        });
      }
    });
  });

  function openDetailHandler() {
    return () => {
      video.pause();
      furnitureDisplayBg.style.opacity = 1;
      furnitureDisplayBg.style.zIndex = 1;

      detailContainer.style.bottom = "15px";
    };
  }

  function closeDetailHandler() {
    return () => {
      video.play();
      furnitureDisplayBg.style.opacity = 0;
      furnitureDisplayBg.style.zIndex = -1;

      detailContainer.style.bottom = "-280px";
    };
  }

  furnitureArray.forEach((furn) => {
    furn.addEventListener("mouseenter", openDetailHandler());
  });

  closeBtn.addEventListener("click", closeDetailHandler());
}

init();
