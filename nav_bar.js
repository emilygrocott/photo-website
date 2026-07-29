const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const body = document.body;

// Create overlay backdrop for mobile menu if not already present
let navOverlay = document.getElementById('nav-overlay');
if (!navOverlay) {
  navOverlay = document.createElement('div');
  navOverlay.id = 'nav-overlay';
  document.body.appendChild(navOverlay);
}

const handleOutsideClick = (event) => {
  if (!navMenu.classList.contains('active')) return;
  if (navMenu.contains(event.target) || hamburger.contains(event.target)) return;
  closeMenu();
};

const openMenu = () => {
  navMenu.classList.add('active');
  navOverlay.classList.add('active');
  hamburger.textContent = '×';
  body.classList.add('no-scroll');
  document.addEventListener('pointerdown', handleOutsideClick);
};

const closeMenu = () => {
  navMenu.classList.remove('active');
  navOverlay.classList.remove('active');
  hamburger.textContent = '☰';
  body.classList.remove('no-scroll');
  document.removeEventListener('pointerdown', handleOutsideClick);
};

hamburger.addEventListener('click', (event) => {
  event.stopPropagation();
  if (navMenu.classList.contains('active')) {
    closeMenu();
  } else {
    openMenu();
  }
});

navOverlay.addEventListener('click', closeMenu);

// Close menu when any link is clicked
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
