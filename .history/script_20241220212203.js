document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector(".screenBody");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".email-box");
    const closeModalBtn = document.querySelector(".close");

    console.log(modal); // Check if modal is selected
    console.log(overlay); // Check if overlay is selected

    const openModal = function () {
        console.log("Opening modal...");
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    };

    const closeModal = function () {
        console.log("Closing modal...");
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    };

    openModalBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default action
        console.log("Open button clicked");
        openModal();
    });
    
    closeModalBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default action
        console.log("Close button clicked");
        closeModal();
    });
});
