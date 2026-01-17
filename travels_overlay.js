document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const overlayContent = document.querySelector(".overlay-content");

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

  // Open function for a specific destination
  window.openOverlay = function (destination) {
    // Clear previous images
    overlayContent.innerHTML = '';

    // Define image arrays per destination
    const galleries = {
      slovakia: [
        'travels/slovakia_overlay/tetras.jpg',
        'travels/slovakia_overlay/tetras2.jpg',
        'travels/slovakia_overlay/tetras3.jpg',
        'travels/slovakia_overlay/tetras4.jpg',
        'travels/slovakia_overlay/tetras5.jpg',
        'travels/slovakia_overlay/tetras6.jpg'
      ],
      acadia: [
        'travels/acadia_overlay/acadia1.jpg',
        'travels/acadia_overlay/acadia2.jpg',
        'travels/acadia_overlay/acadia3.jpg',
        'travels/acadia_overlay/acadia4.jpg',
        'travels/acadia_overlay/acadia5.jpg'
      ],
      roadtrip:[
        'travels/roadtrip_overlay/roadtrip1.jpg',
        'travels/roadtrip_overlay/roadtrip2.jpg',
        'travels/roadtrip_overlay/roadtrip3.jpg',
        'travels/roadtrip_overlay/roadtrip4.jpg',
        'travels/roadtrip_overlay/roadtrip5.jpg',
        'travels/roadtrip_overlay/roadtrip6.jpg',
        'travels/roadtrip_overlay/roadtrip7.jpg'
      ]
    };

    // Add images for the selected gallery
    galleries[destination].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = destination;
      overlayContent.appendChild(img);
    });

    // Show overlay
    overlay.style.display = "block";
    document.body.classList.add("no-scroll");
  };
});

