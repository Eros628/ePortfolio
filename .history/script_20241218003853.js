// script.js

document.querySelector('.navigate-to-navmenu').addEventListener('click', function() {
    // Save the current page URL in localStorage
    localStorage.setItem('lastPage', window.location.href);
  });
  
  document.getElementById('backButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    
    const lastPage = localStorage.getItem('lastPage');
    
    if (lastPage) {
      window.location.href = lastPage;
    } else {
      window.location.href = 'index.html';
    }
  });
  