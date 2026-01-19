document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const overlayContent = document.querySelector(".overlay-content");

  let startX = 0;
  let currentX = 0;
  let isSwiping = false;
  const SWIPE_THRESHOLD = 100;

  // Close overlay when clicking outside the images
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeOverlay();
    }
  });

  // Close function
  window.closeOverlay = function () {
    overlay.style.display = "none";
    document.body.classList.remove("no-scroll");
  };

  // Swipe helpers
  function startSwipe(x) {
    startX = x;
    isSwiping = true;
  }

  function moveSwipe(x) {
    if (!isSwiping) return;
    currentX = x;
  }

  function endSwipe() {
    if (!isSwiping) return;

    const deltaX = currentX - startX;

    // ✅ Only swipe RIGHT closes overlay
    if (deltaX > SWIPE_THRESHOLD) {
      closeOverlay();
    }

    isSwiping = false;
    startX = currentX = 0;
  }

  // Touch events
  overlayContent.addEventListener("touchstart", e => {
    startSwipe(e.touches[0].clientX);
  });

  overlayContent.addEventListener("touchmove", e => {
    moveSwipe(e.touches[0].clientX);
  });

  overlayContent.addEventListener("touchend", endSwipe);

  // Mouse events (desktop)
  overlayContent.addEventListener("mousedown", e => {
    startSwipe(e.clientX);
  });

  overlayContent.addEventListener("mousemove", e => {
    moveSwipe(e.clientX);
  });

  overlayContent.addEventListener("mouseup", endSwipe);
  overlayContent.addEventListener("mouseleave", endSwipe);

  // Open function for a specific destination
  window.openOverlay = function (destination) {
    overlayContent.innerHTML = '';

    const galleries = {
      slovakia: [
        'travels/slovakia_overlay/tetras.jpeg',
        'travels/slovakia_overlay/tetras2.jpeg',
        'travels/slovakia_overlay/tetras3.jpeg',
        'travels/slovakia_overlay/tetras4.jpeg',
        'travels/slovakia_overlay/tetras5.jpeg',
        'travels/slovakia_overlay/tetras6.jpeg'
      ],
      acadia: [
        'travels/acadia_overlay/acadia1.jpeg',
        'travels/acadia_overlay/acadia2.jpeg',
        'travels/acadia_overlay/acadia3.jpeg',
        'travels/acadia_overlay/acadia4.jpeg',
        'travels/acadia_overlay/acadia5.jpeg'
      ],
      roadtrip: [
        'travels/roadtrip_overlay/roadtrip1.jpeg',
        'travels/roadtrip_overlay/roadtrip2.jpeg',
        'travels/roadtrip_overlay/roadtrip3.jpeg',
        'travels/roadtrip_overlay/roadtrip4.jpeg',
        'travels/roadtrip_overlay/roadtrip5.jpeg',
        'travels/roadtrip_overlay/roadtrip6.jpeg',
        'travels/roadtrip_overlay/roadtrip7.jpeg'
      ]
    };

    if (!galleries[destination]) return;

    galleries[destination].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = destination;
      overlayContent.appendChild(img);
    });

    overlay.style.display = "block";
    document.body.classList.add("no-scroll");
  };
});
