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

    // --- Horizontal Scroll Animation with a "Stop" ---
    // We use a GSAP timeline to create a more complex scroll-driven animation.
    // This allows us to "pause" on a specific section.
    let scrollTween;
    
    // Only run the animation on screens wider than 900px
    ScrollTrigger.matchMedia({
        "(min-width: 900px)": function() {
            const sections = gsap.utils.toArray(".horizontal-section");
            const numSections = sections.length;

            // Create a timeline for the horizontal scroll
            scrollTween = gsap.timeline({
                scrollTrigger: {
                    trigger: pinContainer,
                    pin: true,
                    scrub: 1,
                    // We set a large end value to create the long scroll effect.
                    // '100%' for each section transition, but a much larger value for the "stop".
                    end: () => "+=" + (pinContainer.offsetWidth * (numSections + 0.1)), // +0.1 gives a very short pause
                    invalidateOnRefresh: true,
                }
            });

            // 1. Animate from the first to the second section (Privacy)
            scrollTween.to(track, { xPercent: -100, ease: "none" });

            // 2. Animate from the second to the third section (App Launch)
            // We add a delay (the ">+0.1" part) to create the "stop" effect.
            // The user will have to scroll more before this part of the animation begins.
            scrollTween.to(track, { xPercent: -200, ease: "none" }, ">+0.1");
        }
    });
});