const slides = document.querySelector(".testimonial-slides");
const boxes = document.querySelectorAll(".testimonial-box");

let index = 0;
const slideWidth = boxes[0].getBoundingClientRect().width;

document.getElementById("next").onclick = () => {
  index = Math.min(index + 1, boxes.length - 1);
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
};

document.getElementById("prev").onclick = () => {
  index = Math.max(index - 1, 0);
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
};

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
