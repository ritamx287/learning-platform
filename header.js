// JavaScript to add scroll event listener
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    header.classList.toggle('header-scrolled', window.scrollY > 0);
});

// JavaScript to open phone dialer when phone icon is clicked
document.getElementById('phone-icon').addEventListener('click', function() {
    window.open('tel:+919851755667'); // Open phone dialer with the specified number
});

// JavaScript to open search result page when search icon is clicked
document.getElementById('search-icon').addEventListener('click', function() {
    window.location.href = 'search-result.html'; // Navigate to the search result page
});
