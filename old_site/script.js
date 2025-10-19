// Handle PDF download
function handleDownload() {
    // In a real implementation, this would link to your actual PDF file
    alert('Privacy Policy PDF would be downloaded here. Please upload your actual privacy policy PDF to your server and update the href attribute in the download button.');
}

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // --- Cursor Glow Effect ---
    const cursorGlow = document.getElementById('cursor-glow');
    if (cursorGlow) {
        window.addEventListener('mousemove', (e) => {
            gsap.to(cursorGlow, {
                duration: 0.5,
                x: e.clientX,
                y: e.clientY,
                ease: 'power2.out'
            });
        });
    }

    // --- Horizontal Scroll Animation ---
    const track = document.getElementById("scroll-track");
    const pinContainer = document.getElementById("pin-container");

    // Use GSAP to create the horizontal scroll effect
    // This works by "pinning" the container and moving the track horizontally
    // as the user scrolls vertically.
    let scrollTween = gsap.to(track, {
        xPercent: -100 * (track.children.length - 1),
        ease: "none", // IMPORTANT!
        scrollTrigger: {
            trigger: pinContainer,
            pin: true,
            scrub: 1, // Makes the animation smooth
            end: () => "+=" + (track.offsetWidth - window.innerWidth) * 2, // Multiplier increases scroll distance
            // Break the animation on smaller screens
            invalidateOnRefresh: true,
        }
    });

    // Kill animations on mobile
    ScrollTrigger.matchMedia({
        "(max-width: 899px)": function() {
            if (scrollTween) scrollTween.kill();
        }
    });
});