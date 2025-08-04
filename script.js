// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle PDF download
function handleDownload() {
    // In a real implementation, this would link to your actual PDF file
    alert('Privacy Policy PDF would be downloaded here. Please upload your actual privacy policy PDF to your server and update the href attribute in the download button.');
}

// Add scroll effect to navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.style.background = 'rgba(80, 191, 119, 0.5)';

    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.1)';
    }
});

// Add parallax effect to hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
});