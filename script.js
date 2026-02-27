// Scrolla till toppen när man klickar på loggan
document.querySelector(".logo").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});