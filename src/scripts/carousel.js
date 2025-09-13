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
        slide.style.display = i === index ? "block" : "block";
        slide.setAttribute('aria-hidden', i !== index);
        slide.setAttribute('aria-current', i === index ? 'true' : 'false');
        slides[currentIndex].setAttribute('id', '');
        if (i === index) {
            slide.focus();
        }
    }
)};

function nextSlide() {
    let nextIndex = (currentIndex + 1 + slides.length) % slides.length;
    
    slides[currentIndex].setAttribute('id', 'carousel-slide-to-right');

    currentIndex = (currentIndex + 1 + slides.length) % slides.length;
    
    updateSlides(currentIndex);
}

function prevSlide() {
    slides[currentIndex].setAttribute('id', 'carousel-slide-to-left');

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

// Pause on user mouseenter 
carousel.addEventListener('mouseenter', () => {
    if (autoRotate) togglePause();
}) 

// Continue autoplaying if mouseleave
carousel.addEventListener('mouseleave', () => {
    if (!autoRotate) togglePause();
})

document.addEventListener('keydown', (pressed) => {
    if (pressed.key === "ArrowLeft") {
        prevSlide();
    }
    if (pressed.key === "ArrowRight") {
        nextSlide();
    }
    if (autoRotate) togglePause();
})

updateSlides(currentIndex);