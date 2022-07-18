const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
    slide.style.transform = 'translateX(${index * 100}%)';
});