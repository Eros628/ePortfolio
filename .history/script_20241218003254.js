document.querySelector('.navigate-to-navmenu').addEventListener('click', function() {
    // Save the current page URL to localStorage
    localStorage.setItem('lastPage', window.location.href);
}


document.getElementById('backButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    
    // Retrieve the last visited page URL from localStorage
    const lastPage = localStorage.getItem('lastPage');
    
    // If a last page is stored, go back to it
    if (lastPage) {
      window.location.href = lastPage;
    } else {
      // If no last page is stored, just return to index.html as a fallback
      window.location.href = 'index.html';
    }
  });