import {testimonials} from "./testimonials.js"
const slider = document.querySelector(".slider-img");
const prevBtn = document.querySelector('.btn-prev')
const nextBtn = document.querySelector('.btn-next')
const imgs = document.querySelectorAll(".slider-img .content");
// console.log(img)
const toggleBtn = document.querySelector(".toggle");
const navCollapse = document.querySelector(".nav-collapse");

const panels = document.querySelectorAll(".img");

const labels = document.querySelectorAll(".contact-form label");

const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");
let idx = 0;

function changeImg(){
    if(idx > imgs.length - 1){
        idx = 0
    } else if(idx < 0){
        idx = imgs.length - 1
    }
    slider.style.transform = `translateX(${-idx * 100}%)`
}

nextBtn.addEventListener('click', () => {
    idx++
    changeImg()
    console.log(idx)
})
prevBtn.addEventListener('click', () => {
    idx--
    changeImg()
    console.log(idx)
})




toggleBtn.addEventListener('click', () => {
    navCollapse.classList.toggle("show-collapse");
    console.log('hello')
})




panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});
function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}



labels.forEach((label) => {
    console.log(label.innerHTML);
    label.innerHTML = label.innerText
    .split("")
    .map((letter, idx) => {
        // console.log(letter)
        return `<span style="transition-delay:${
          idx * 50
        }ms"><b>${letter}</b></span>`;
    })
    .join("")

    console.log(label.innerHTML)
})


let index = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[index];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  index++;

  if (index > testimonials.length - 1) {
    index = 0;
  }
}

setInterval(updateTestimonial, 10000);