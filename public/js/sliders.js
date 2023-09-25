let div_carrossel = document.querySelector('.container-sliders');
let div_img = document.querySelectorAll('.container-sliders .slider')

let idx = 0;

function carrossel() {
    idx++;

    if (idx >= div_img.length) {
        idx = 0;
    }

    const translateXValue = `-${idx * 100}%`;
    div_carrossel.style.transform = `translateX(${translateXValue})`;
}

setInterval(carrossel, 3000);
