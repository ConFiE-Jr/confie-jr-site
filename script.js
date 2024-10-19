document.addEventListener("DOMContentLoaded", function () {
    const mainTitle = document.querySelector(".main-title");
    mainTitle.style.opacity = 0;
    mainTitle.style.transform = "translateY(-20px)";
    
    setTimeout(() => {
        mainTitle.style.opacity = 1;
        mainTitle.style.transform = "translateY(0)";
        mainTitle.style.transition = "all 2s ease-in-out";
    }, 500);
});
