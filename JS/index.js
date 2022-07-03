// ESCAPE WEB-SITE TO THE CODES START 

window.addEventListener("load",()=>{
  window.addEventListener("scroll",()=>{
    let header = document.querySelector(".header");
    header.classList.toggle("active",scrollY > 0);
  });
});