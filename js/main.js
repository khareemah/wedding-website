const slides = document.querySelectorAll("section.home .slide");
let currentlySelected = 0;
window.addEventListener("load", function() {
  this.setInterval(function() {
    slides[currentlySelected].classList.remove("active");
    currentlySelected++;
    if (currentlySelected == slides.length) currentlySelected = 0;
    slides[currentlySelected].classList.add("active");
  }, 5000);
});
