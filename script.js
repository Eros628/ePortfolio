document.addEventListener('DOMContentLoaded', () => {      
    const modal = document.querySelector(".screenBody");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".email-box");
    const closeModalBtn = document.querySelector(".cancel");

    const openModal = function () {             //open the modal window. Removing the hidden class.
        overlay.classList.remove("hidden");   
        modal.classList.remove("hidden");
        gsap.from('.screenBody', {duration: 0.5, opacity:0, ease:'back-in'})
    };

    const closeModal = function () {            //close the modal window, adding back the hidden class.
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
