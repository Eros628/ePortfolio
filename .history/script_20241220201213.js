document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector(".screen-body");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".email-box");
    const closeModalBtn = document.querySelector(".close");


    const openModal = function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    };

    openModalBtn.addEventListener("click", openModal);
});
