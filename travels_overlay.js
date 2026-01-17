function openOverlay() {
  document.getElementById("overlay").style.display = "flex";
  document.body.classList.add('no-scroll')
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
  document.body.classList.remove('no-scroll')
}
