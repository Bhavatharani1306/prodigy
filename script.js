// script.js

// Get the navbar element
const navbar = document.getElementById('navbar');

// Add the 'scrolled' class to navbar when the page is scrolled
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // 50px threshold
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Get all the menu links
const menuLinks = document.querySelectorAll('#navbar ul li a');

// Add event listeners to each menu link for hover effects
menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('active');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('active');
    });
});
