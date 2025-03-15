// Add custom JavaScript here
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('sticky-nav');
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('sticky-nav');
        }
    });
});