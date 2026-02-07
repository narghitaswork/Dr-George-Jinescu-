/* ============================================
   DR. GEORGE JINESCU - WEBSITE 2026
   JavaScript Functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

    // ============ MOBILE MENU ============
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        // Toggle menu on click
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    // ============ NAVBAR SCROLL EFFECT ============
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ============ SMOOTH SCROLL ============
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============ SCROLL REVEAL ANIMATION ============
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        const revealOnScroll = function() {
            revealElements.forEach(function(el) {
                const elementTop = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight - 100) {
                    el.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Check on load
    }

});
