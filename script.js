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

// Cases de Sucesso
// Inicializando o slide atual
let currentSlide = 0;

// Selecionando os elementos de slide e pontos (dots)
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Função para exibir o slide atual e atualizar os pontos
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active-slide', i === index);  // Mostra o slide ativo
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active-dot', i === index);  // Ativa o ponto correspondente
    });
}

// Função para ir para o slide anterior
function prevSlide() {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
}

// Função para ir para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
}

// Adicionando eventos de clique aos botões
document.querySelector('.prev-btn').addEventListener('click', prevSlide);
document.querySelector('.next-btn').addEventListener('click', nextSlide);

// Adicionando evento de clique aos pontos (dots)
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

