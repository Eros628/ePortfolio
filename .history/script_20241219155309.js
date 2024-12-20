const swup = new Swup();



swup.on('animationOutStart', () => {
    // Add the 'is-animating' class to start your custom animation
    document.documentElement.classList.add('is-animating');
    
    // Delay content removal to allow the animation to complete
    setTimeout(() => {
        swup.triggerEvent('contentReplaced'); // Proceed with Swup's transition
    }, 500); // Match the duration of your CSS animation (500ms)
});

swup.on('animationInStart', () => {
    // Remove the 'is-animating' class after animation completes
    setTimeout(() => {
        document.documentElement.classList.remove('is-animating');
    }, 500); // Match the duration of your CSS animation (500ms)
});