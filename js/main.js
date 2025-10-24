// ==========================================
// Navigation Toggle
// ==========================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// ==========================================
// Navbar Scroll Effect
// ==========================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ==========================================
// Smooth Scrolling for Anchor Links
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ==========================================
// Hero Slider (Optional - for multiple images)
// ==========================================

class HeroSlider {
    constructor(sliderElement, interval = 5000) {
        this.slider = sliderElement;
        this.slides = Array.from(sliderElement.querySelectorAll('.hero-slide'));
        this.currentSlide = 0;
        this.interval = interval;
        this.timer = null;

        if (this.slides.length > 1) {
            this.init();
        }
    }

    init() {
        this.startAutoPlay();
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }

    startAutoPlay() {
        this.timer = setInterval(() => this.nextSlide(), this.interval);
    }

    stopAutoPlay() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
}

// Initialize hero slider
const heroSlider = document.querySelector('.hero-slider');
if (heroSlider) {
    new HeroSlider(heroSlider);
}

// ==========================================
// Intersection Observer for Scroll Animations
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll('.specialty-card, .welcome-content, .hours-wrapper');
animatedElements.forEach(el => observer.observe(el));

// ==========================================
// Form Validation (for reservation/contact pages)
// ==========================================

function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach(field => {
        const errorElement = field.parentElement.querySelector('.error-message');

        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            if (errorElement) {
                errorElement.textContent = 'Dieses Feld ist erforderlich';
            }
        } else {
            field.classList.remove('error');
            if (errorElement) {
                errorElement.textContent = '';
            }
        }

        // Email validation
        if (field.type === 'email' && field.value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(field.value)) {
                isValid = false;
                field.classList.add('error');
                if (errorElement) {
                    errorElement.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
                }
            }
        }

        // Phone validation
        if (field.type === 'tel' && field.value) {
            const phonePattern = /^[\d\s\+\-\(\)]+$/;
            if (!phonePattern.test(field.value)) {
                isValid = false;
                field.classList.add('error');
                if (errorElement) {
                    errorElement.textContent = 'Bitte geben Sie eine gültige Telefonnummer ein';
                }
            }
        }
    });

    return isValid;
}

// Add form validation to all forms
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!validateForm(form)) {
            return;
        }

        // Check if this is a Web3Forms form
        const accessKey = form.querySelector('input[name="access_key"]');
        if (accessKey) {
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            // Check if this is demo mode (access key not set)
            const isDemoMode = accessKey.value === 'IHR_WEB3FORMS_ACCESS_KEY';

            if (isDemoMode) {
                // Demo mode - just show a message
                showFormMessage(form, 'info', '📋 Demo-Modus: Das Formular ist noch nicht aktiv. In der Live-Version werden Reservierungen direkt per E-Mail versendet. Für Reservierungen rufen Sie bitte an: 043 344 05 36');
                return;
            }

            try {
                submitButton.disabled = true;
                submitButton.textContent = 'Wird gesendet...';

                const formData = new FormData(form);
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    // Show success message
                    showFormMessage(form, 'success', 'Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.');
                    form.reset();
                } else {
                    showFormMessage(form, 'error', 'Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns an: 043 344 05 36');
                }
            } catch (error) {
                showFormMessage(form, 'error', 'Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns an: 043 344 05 36');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        }
    });

    // Real-time validation on blur
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateForm(form);
        });
    });
});

// Show form success/error message
function showFormMessage(form, type, message) {
    // Remove any existing message
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.padding = '1rem';
    messageDiv.style.marginTop = '1rem';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.fontWeight = '500';

    if (type === 'success') {
        messageDiv.style.backgroundColor = '#d4edda';
        messageDiv.style.color = '#155724';
        messageDiv.style.border = '1px solid #c3e6cb';
    } else if (type === 'info') {
        messageDiv.style.backgroundColor = '#d1ecf1';
        messageDiv.style.color = '#0c5460';
        messageDiv.style.border = '1px solid #bee5eb';
    } else {
        messageDiv.style.backgroundColor = '#f8d7da';
        messageDiv.style.color = '#721c24';
        messageDiv.style.border = '1px solid #f5c6cb';
    }

    form.appendChild(messageDiv);

    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Remove message after 10 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 10000);
}

// ==========================================
// Lazy Loading Images
// ==========================================

if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ==========================================
// Current Page Highlight in Navigation
// ==========================================

function highlightCurrentPage() {
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

highlightCurrentPage();

// ==========================================
// Back to Top Button
// ==========================================

function createBackToTopButton() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Nach oben scrollen');
    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Uncomment to enable back to top button
// createBackToTopButton();

// ==========================================
// Console Message
// ==========================================

console.log('%c🍕 Willkommen bei Landikerstübli!', 'font-size: 20px; font-weight: bold; color: #c8773d;');
console.log('%cWebsite erstellt mit modernen Web-Technologien', 'font-size: 12px; color: #666;');
