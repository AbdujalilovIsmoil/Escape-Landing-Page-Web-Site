// ESCAPE WEB-SITE TO THE CODES START

window.addEventListener("load", () => {
  window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    header.classList.toggle("active", scrollY > 0);
  });

  let faBarsButton = document.querySelector(".fa-bars");
  let timesButton = document.querySelector(".fa-times");
  let secretNavbar = document.querySelector(".secret");
  let linkButtons = document.querySelectorAll(".secret__link");

  faBarsButton.addEventListener("click", openButton);

  function openButton() {
    secretNavbar.classList.add("active");
  }

  timesButton.addEventListener("click", closeButton);

  function closeButton() {
    secretNavbar.classList.remove("active");
  }

  for (let i = 0; i < linkButtons.length; i++) {
    linkButtons[i].addEventListener("click", linkButtonCloseNavbar);
  }

  function linkButtonCloseNavbar() {
    secretNavbar.classList.remove("active");
  }

  // AOS LIBRARY TO THE CODE
  AOS.init();
});
