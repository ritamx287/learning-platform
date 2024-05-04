window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const overlay = document.querySelector('.overlay');
    const textContainer = document.querySelector('.text-container');
    let scrollPosition = window.pageYOffset;

    parallax.style.backgroundPositionY = scrollPosition * 0.1 + 'px';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, ' + Math.min(scrollPosition / 1000, 0.8) + ')';
    textContainer.style.transform = 'translateY(' + scrollPosition * -1 + 'px)';
});
