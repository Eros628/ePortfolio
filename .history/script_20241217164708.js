const carouselItems = document.querySelectorAll('.icons');
let currentIndex = 0;

// Function to update center item
function updateCarousel() {
  carouselItems.forEach((item, index) => {
    item.classList.remove('active');
    if (index === currentIndex) {
      item.classList.add('active');
    }
  });
}

// Example: Change center image every 2 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
}, 2000);

updateCarousel();
