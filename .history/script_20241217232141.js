const emailBox = document.getElementById("emailBox");
const emailPath = document.getElementById("emailPath");

// New path data to animate to
const newD = 
  "M26.9567 13.7912C27.1175 13.2628 26.8195 12.7041 26.2912 12.5433L17.6811 9.92287C17.1527 9.76207 16.5941 10.06 16.4333 10.5884C16.2725 11.1167 16.5704 11.6754 17.0988 11.8362L24.7522 14.1655L22.4229 21.8189C22.2621 22.3473 22.56 22.9059 23.0884 23.0667C23.6167 23.2275 24.1754 22.9296 24.3362 22.4012L26.9567 13.7912ZM11.4706 22.3824L26.4706 14.3824L25.5294 12.6176L10.5294 20.6176L11.4706 22.3824Z";

// Original path data
const originalD = "M10,20 L20,20 L15,10 Z";

// Hover effect: animate the path
emailBox.addEventListener("mouseenter", () => {
  gsap.to(emailPath, { duration: 1, attr: { d: newD }, ease: "linear" });
});

emailBox.addEventListener("mouseleave", () => {
  gsap.to(emailPath, { duration: 1, attr: { d: originalD }, ease: "linear" });
});