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
