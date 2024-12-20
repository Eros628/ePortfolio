const overlay = document.getElementById('overlay');
const link = document.getElementById('goToNavmenu');

link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default navigation
    const target = link.href; // Get target URL

    // Animate the overlay
    gsap.to(overlay, {
        scaleX: 1,
        duration: 1,
        ease: "bounce",
        onComplete: () => {
            window.location.href = target; // Navigate after animation
        }
    });
});

// Hide overlay on page load
window.addEventListener('load', () => {
    gsap.to(overlay, {
        scaleX: 0,
        duration: 0.5,
        ease: "power2.inOut"
    });
});
