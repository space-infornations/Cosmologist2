window.addEventListener("scroll", function () {
  const goToTopButton = document.getElementById("goToTop");
  if (window.scrollY > 200) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
});

document.getElementById("goToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
