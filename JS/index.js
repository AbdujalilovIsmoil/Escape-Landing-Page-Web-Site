// ESCAPE WEB-SITE TO THE CODES

window.addEventListener("load", () => {
  window.addEventListener("scroll", () => {
    $(".header").classList.toggle("active", scrollY > 0);
  });

  $(".fa-bars").addEventListener("click", openButton);

  function openButton() {
    $(".secret").classList.add("active");
    $("body").style.overflow = "hidden";
  }

  $(".fa-times").addEventListener("click", closeButton);

  function closeButton() {
    $(".secret").classList.remove("active");
    $("body").style.overflow = "";
  }

  for (let i = 0; i < $$(".secret__link").length; i++) {
    $$(".secret__link")[i].addEventListener("click", linkButtonCloseNavbar);
  }

  function linkButtonCloseNavbar() {
    $(".secret").classList.remove("active");
    $("body").style.overflow = "";
  }

  // AOS LIBRARY TO THE CODE
  AOS.init();
});
