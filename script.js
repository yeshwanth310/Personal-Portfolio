AOS.init();

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
// window.addEventListener("scroll", e => {
//   if (window.scrollY > 80) {
//     alert("hey");
//   }
// });
