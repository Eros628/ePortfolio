const emailBox = document.getElementById("emailBox");
const emailPath = document.getElementById("emailPath");

// New path data to animate to
const newD = 
  "M26.9567 13.7912C27.1175 13.2628 26.8195 12.7041 26.2912 12.5433L17.6811 9.92287C17.1527 9.76207 16.5941 10.06 16.4333 10.5884C16.2725 11.1167 16.5704 11.6754 17.0988 11.8362L24.7522 14.1655L22.4229 21.8189C22.2621 22.3473 22.56 22.9059 23.0884 23.0667C23.6167 23.2275 24.1754 22.9296 24.3362 22.4012L26.9567 13.7912ZM11.4706 22.3824L26.4706 14.3824L25.5294 12.6176L10.5294 20.6176L11.4706 22.3824Z";

// Original path data
const originalD = "M38.0001 12.3333H33.0001C30.7899 12.3333 28.6703 13.2113 27.1075 14.7741C25.5447 16.3369 24.6667 18.4565 24.6667 20.6667V25.6667H19.6667V32.3333H24.6667V45.6667H31.3334V32.3333H36.3334L38.0001 25.6667H31.3334V20.6667C31.3334 20.2246 31.509 19.8007 31.8216 19.4882C32.1341 19.1756 32.5581 19 33.0001 19H38.0001V12.3333Z";

// Hover effect: animate the path
emailBox.addEventListener("mouseenter", () => {
  gsap.to(emailPath, { duration: 1, attr: { d: newD }, ease: "linear" });
});

emailBox.addEventListener("mouseleave", () => {
  gsap.to(emailPath, { duration: 1, attr: { d: originalD }, ease: "linear" });
});