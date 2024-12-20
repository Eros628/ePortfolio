document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector(".screenBody");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".email-box");
    const closeModalBtn = document.querySelector(".close");


    const openModal = function () {
        overlay.classList.remove("hidden");
        modal.classList.remove("hidden");
    };

    const closeModal = function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
      };

    openModalBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default action
        console.log("Open button clicked");
        openModal();
    });
    
    closeModalBtn .addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default action
        closeModal();
    });
    
});