window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("active", window.scrollY > 100);
});
const front = document.querySelector("#front");
const box = document.querySelector(".box");
const back = document.querySelector("#back");
front.addEventListener("click", () => {
  box.classList.toggle("box-1");
});
