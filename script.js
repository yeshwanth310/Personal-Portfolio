window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("active", window.scrollY > 100);
});
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach(li => {
    li.classList.remove("active-nav");
    if (li.classList.contains(current)) {
      li.classList.add("active-nav");
    }
  });
});
const bars = document.querySelector(".bars");
const nav = document.querySelector("nav");
const list = document.getElementsByTagName("a");
bars.addEventListener("click", () => {
  nav.classList.toggle("mobo");
});
