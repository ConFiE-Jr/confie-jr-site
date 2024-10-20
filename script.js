window.addEventListener('scroll', function() {
    const heroText = document.querySelector('.hero h1');
    const scrollY = window.scrollY;

    // Adiciona efeito de fade conforme a rolagem
    heroText.style.opacity = 1 - scrollY / 600;
});
