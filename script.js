const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    // Basic toggle for mobile visibility
    navLinks.classList.toggle('active');
    
    // Add simple inline style toggle for the demo
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "100%";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "#fff";
        navLinks.style.padding = "20px";
    }
});