const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
    slides.style.transform = 'translateX(${index * 100}%)';
});