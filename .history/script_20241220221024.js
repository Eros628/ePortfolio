document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector(".screenBody");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".email-box");
    const closeModalBtn = document.querySelector(".cancel");


    const openModal = function () {
        overlay.classList.remove("hidden");
        modal.classList.remove("hidden");
    };

    const closeModal = function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
      };

    openModalBtn.addEventListener("click", (event) => {
        event.preventDefault();
        openModal();
    });
    
    closeModalBtn .addEventListener("click", (event) => {
        event.preventDefault();
        closeModal();
    });

    overlay.addEventListener("click", (event) => {
        event.preventDefault();
        closeModal();
    })
    
});
