
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const overlayContent = document.querySelector(".overlay-content");

  overlay.addEventListener("click", (e) => {
    console.log("Clicked:", e.target);

    if (e.target === overlay) {
      closeOverlay();
    }
  });

  window.openOverlay = function () {
    overlay.style.display = "block";
    document.body.classList.add("no-scroll");
  };

  window.closeOverlay = function () {
    overlay.style.display = "none";
    document.body.classList.remove("no-scroll");
  };
});