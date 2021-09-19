AOS.init();

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 5) {
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
const tesla = document.querySelector(".tesla-img");
tesla.addEventListener("click", e => {
  const container = document.querySelector(".container");

  const close = document.querySelector(".close");
  container.classList.add("show");
  close.addEventListener("click", () => {
    container.classList.remove("show");
  });
});
