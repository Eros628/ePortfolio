document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const link = document.getElementById('goToNavmenu');

    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default navigation
        const target = link.href; // Get target URL

        // Animate the overlay sliding down
        gsap.to(overlay, {
            y: '0%',        // Slide the overlay into view
            duration: 1,
            ease: "power3.in", // Bounce effect
            onComplete: () => {
                window.location.href = target; // Navigate after animation
                
            }
        });
    });

    // Hide overlay on page load
    window.addEventListener('load', () => {
        gsap.to(overlay, {
            opacity: 1,     // Fade in overlay
            duration: 0.3,
            ease: "power2.inOut"
        });
    });
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smooth = ScrollSmoother.create({
   wrapper:  '#smooth-wrapper',
   content: '#smooth-content',
   smooth:2,
   effects: true
});
