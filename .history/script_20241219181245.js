

gsap.from(".transition-navmenu", {duration:1, y: '-100%', ease: 'ease'})



const overlay = document.getElementById('overlay');

// Handle link clicks
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Stop default navigation
        const target = link.href; // Get target URL

        // Animate the overlay to cover the screen
        gsap.to(overlay, {
            scaleX: 1,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
                // Navigate to the target URL after animation
                window.location.href = target;
            }
        });
    });
});

// On page load, hide the overlay
window.addEventListener('load', () => {
    gsap.to(overlay, {
        scaleX: 0,
        duration: 0.5,
        ease: "power2.inOut"
    });
});
