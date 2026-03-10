// ========================================
// Jobley Website JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initDownloadButtons();
});

// ========================================
// Navigation Handling
// ========================================
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // Add magnetic effect on hover
        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            link.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translate(0, 0)';
        });
    });
}

// ========================================
// Scroll-triggered Animations
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards for scroll animations
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// ========================================
// Download Button Interactions
// ========================================
function initDownloadButtons() {
    const downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Let the native href link work instead of preventing it

            // Add a click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        });

        // Add 3D tilt effect on mouse move
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            button.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
}

// ========================================
// Smooth scrolling for anchor links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Add parallax effect to hero section
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroName = document.querySelector('.hero-name');
    const heroTagline = document.querySelector('.hero-tagline');

    if (heroName && heroTagline) {
        heroName.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroTagline.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});
