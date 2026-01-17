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
      roadtrip:[
        'travels/roadtrip_overlay/roadtrip1.jpeg',
        'travels/roadtrip_overlay/roadtrip2.jpeg',
        'travels/roadtrip_overlay/roadtrip3.jpeg',
        'travels/roadtrip_overlay/roadtrip4.jpeg',
        'travels/roadtrip_overlay/roadtrip5.jpeg',
        'travels/roadtrip_overlay/roadtrip6.jpeg',
        'travels/roadtrip_overlay/roadtrip7.jpeg'
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

