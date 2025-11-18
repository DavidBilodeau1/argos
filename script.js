/*----------------------------------------------------*/
/* Navigation - Sticky on Scroll
------------------------------------------------------ */

window.addEventListener('scroll', function() {
    const mainNav = document.querySelector('.main_nav');

    if (window.scrollY > 300) {
        mainNav.classList.add('sticky');
    } else {
        mainNav.classList.remove('sticky');
    }
});

/*----------------------------------------------------*/
/* Mobile Navigation Toggle
------------------------------------------------------ */

const mobileToggle = document.querySelector('.mobile-toggle');
const mainNav = document.querySelector('.main_nav');

if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
        mainNav.classList.toggle('open-nav');
    });
}

// Close mobile nav when clicking a link
const navLinks = document.querySelectorAll('.main_nav li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (mainNav.classList.contains('open-nav')) {
            mainNav.classList.remove('open-nav');
        }
    });
});

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

document.querySelectorAll('.smoothscroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Update URL hash after scroll
                setTimeout(() => {
                    window.location.hash = targetId;
                }, 800);
            }
        }
    });
});

/*----------------------------------------------------*/
/* GSAP Animations for Hero Section
------------------------------------------------------ */

if (typeof gsap !== 'undefined') {
    gsap.from(".heading", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        stagger: 0.4
    });
}

/*----------------------------------------------------*/
/* Scroll Reveal Animations for Service Cards
------------------------------------------------------ */

function revealOnScroll() {
    const cards = document.querySelectorAll('.service-card');
    const contactItems = document.querySelectorAll('.contact-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    contactItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Initialize scroll reveal when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', revealOnScroll);
} else {
    revealOnScroll();
}
