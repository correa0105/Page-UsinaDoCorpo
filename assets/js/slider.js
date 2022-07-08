const totalSliders = document.querySelectorAll(".imgSlider").length;
const clickSlider = document.querySelector(".sliderControls");

document.querySelector(".containerImgs").style.width = `calc(100vw *${totalSliders})`;

let currentSlide = 0;

function goNext() {
    currentSlide++;
    if(currentSlide > (totalSliders-1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function goBack() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSliders - 1;
    }
    updateMargin();
}

function updateMargin() {
    let sliderWidth = document.querySelector(".imgSlider").clientWidth;
    let newMargin = (currentSlide * sliderWidth);
    document.querySelector(".containerImgs").style.marginLeft = `-${newMargin}px`;
}

function clickButton() {
    clickSlider.addEventListener("click", event => {
        const element = event.target;

        if(element.classList.contains("backSlider")) {
            goBack();
        }
        if(element.classList.contains("nextSlider")) {
            goNext();
        }
    })
}

clickButton();
