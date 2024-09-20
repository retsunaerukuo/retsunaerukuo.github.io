function checkInput() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    
    const defaultImage = document.getElementById('imageDefault');
    const specificImage = document.getElementById('image911');
    
    // Hide both images first
    defaultImage.classList.remove('show');
    specificImage.classList.remove('show');
    
    if (num1 === 9 && num2 === 11) {
        // Show specific image for 9 + 11
        specificImage.classList.add('show');
    } else {
        // Show default image for other inputs
        defaultImage.classList.add('show');
    }
    
    // Reveal the image container
    let imageContainer = document.querySelector('.image-reveal');
    imageContainer.style.height = "300px";
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
