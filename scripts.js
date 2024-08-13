// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example of a mobile menu toggle (if using a burger menu)
// const navToggle = document.querySelector('.nav-toggle');
// const nav = document.querySelector('nav ul');
// navToggle.addEventListener('click', () => {
//     nav.classList.toggle('nav-open');
// });
