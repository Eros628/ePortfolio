// script.js

document.querySelector('.navigate-to-navmenu').addEventListener('click', function() {
    // Save the current page URL in localStorage
    localStorage.setItem('lastPage', window.location.href);
    console.log(localStorage);
});
  
document.getElementById('backButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    
    const lastPage = localStorage.getItem('lastPage');
    
    if (lastPage) {
        backButton.setAttribute("href", lastPage)
    } else {
        backButton.setAttribute("href", 'index.html')
    }
});
  