const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  // Toggle nav menu
  navMenu.classList.toggle('active');

  // Toggle hamburger ↔ X
  hamburger.textContent = navMenu.classList.contains('active') ? "x" : "☰";
});

// Close menu when any link is clicked
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.textContent = "☰"; // reset icon
  });
});
