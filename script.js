const slider = document.querySelector(".slider-img");
const prevBtn = document.querySelector('.btn-prev')
const nextBtn = document.querySelector('.btn-next')

const imgs = document.querySelectorAll(".slider-img img");
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