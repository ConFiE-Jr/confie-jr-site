// Função para animar ao rolar a página
function animarScroll() {
    const sections = document.querySelectorAll('.animar');
    const windowBottom = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowBottom - 100) {
            section.classList.add('visivel');
        }
    });
}

window.addEventListener('scroll', animarScroll);
