import { Vibrant } from "node-vibrant/browser";

const slides = document.querySelectorAll('.hero-carousel-slide');
const carousel = document.querySelector('.hero-carousel-container');
const prevBtn = document.getElementById('carousel-button-previous');
const nextBtn = document.getElementById('carousel-button-next');

let currentIndex = 0;
let autoRotate = true;
let interval = setInterval(nextSlide, 5000);
let paused = false;

function updateSlides(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
        slide.setAttribute('aria-hidden', i !== index);
        slide.setAttribute('aria-current', i === index ? 'true' : 'false');
        if (i === index) {
            slide.focus();
        }
    }
)};

function nextSlide() {
    currentIndex = currentIndex + 1
    updateSlides(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides(currentIndex);
}

function togglePause() {
    autoRotate = !autoRotate;
    
    if (autoRotate) {
        interval = setInterval(nextSlide, 5000);
    } else {
        clearInterval(interval);
    }
}

prevBtn.addEventListener('click', () => {
    prevSlide();
    if (autoRotate) togglePause();
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    if (autoRotate) togglePause();
});

updateSlides(currentIndex);