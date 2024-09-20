function checkAnswer() {
    // Show the image regardless of the answer
    let imageContainer = document.querySelector('.image-reveal');
    imageContainer.style.height = "300px";  // Reveal the full height of the image
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
