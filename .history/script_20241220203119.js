document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector(".screen-body");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".email-box");
    const closeModalBtn = document.querySelector(".close");


    const openModal = function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    };

    const closeModal = function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
      };

    openModalBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default action
        openModal();
    });
    
    closeModalBtn .addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default action
        closeModal();
    });
    
});
