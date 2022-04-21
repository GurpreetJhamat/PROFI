const slider = document.querySelector(".slider-img");
const prevBtn = document.querySelector('.btn-prev')
const nextBtn = document.querySelector('.btn-next')
const imgs = document.querySelectorAll(".slider-img .content");
// console.log(img)

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

const toggleBtn = document.querySelector('.toggle');
const navCollapse = document.querySelector('.nav-collapse');
// nav - collapse;

toggleBtn.addEventListener('click', () => {
    navCollapse.classList.toggle("show-collapse");
    console.log('hello')
})


const panels = document.querySelectorAll(".img");

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