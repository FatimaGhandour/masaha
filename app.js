const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar-list");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");

  if (hamburger.classList.contains("open")) {
    menu.style.top = 0;
  } else {
    menu.style.top = "-400px";
  }
});

