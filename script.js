// Adicione animações de scroll
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});
let slideIndex = 1;
showSlides(slideIndex);

let slideIndex = 1;
showSlides(slideIndex);

// Função para mudar os slides dos Cases de Sucesso
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Função para exibir o slide atual
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Esconde todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("active-slide"); // Remove a classe ativa de todos os slides
    }

    // Remove a classe "active-dot" de todos os pontos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    // Exibe o slide atual e ativa o ponto correspondente
    slides[slideIndex - 1].style.display = "flex";
    slides[slideIndex - 1].classList.add("active-slide"); // Adiciona a classe ativa ao slide atual
    dots[slideIndex - 1].className += " active-dot";
}

