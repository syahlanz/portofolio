document.addEventListener("DOMContentLoaded", function () {
    const dynamicSpan = document.querySelector(".typing-text .dynamic");
    const words = ["IT Support Lotus", "SolFix Klik Kompi", "Inklink", "Web Designer", "Freelancer", "Content Creator"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        const displayText = isDeleting ? currentWord.substring(0, charIndex--) : currentWord.substring(0, charIndex++);

        dynamicSpan.textContent = displayText;

        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => (isDeleting = true), 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, isDeleting ? 100 : 150);
    }

    typeEffect();

    // Musik dengan Popup
    const music = document.getElementById("bg-music");
    const popup = document.getElementById("music-popup");
    const startButton = document.getElementById("start-music");

    startButton.addEventListener("click", function () {
        music.play();
        popup.style.display = "none";
    });
});
