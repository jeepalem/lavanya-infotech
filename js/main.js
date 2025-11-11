/**
 * Lavanya Infotech Limited - Main JavaScript
 * Handles navigation, form validation, and user interactions
 */

(function() {
    'use strict';

    // ===========================
    // DOM Elements
    // ===========================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const contactForm = document.querySelector('form');
    const formInputs = contactForm.querySelectorAll('input, textarea, select');

    // ===========================
    // Smooth Scrolling for Navigation Links
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===========================
    // Mobile Menu Toggle
    // ===========================
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // ===========================
    // Active Navigation Link Highlighting
    // ===========================
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset;

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // Throttle function for better performance
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    window.addEventListener('scroll', throttle(updateActiveNavLink, 100));

    // ===========================
    // Form Validation
    // ===========================
    const validators = {
        name: {
            validate: (value) => value.trim().length >= 2,
            message: 'Please enter a valid name (at least 2 characters)'
        },
        email: {
            validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message: 'Please enter a valid email address'
        },
        company: {
            validate: (value) => true, // Optional field
            message: ''
        },
        service: {
            validate: (value) => value !== '',
            message: 'Please select a service'
        },
        message: {
            validate: (value) => value.trim().length >= 10,
            message: 'Please enter a message (at least 10 characters)'
        }
    };

    function showError(input, message) {
        input.classList.add('invalid');
        let errorElement = input.parentElement.querySelector('.error');

        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'error';
            input.parentElement.appendChild(errorElement);
        }

        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function clearError(input) {
        input.classList.remove('invalid');
        const errorElement = input.parentElement.querySelector('.error');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    function validateField(input) {
        const fieldName = input.name;
        const validator = validators[fieldName];

        if (!validator) return true;

        const value = input.value;
        const isValid = validator.validate(value);

        if (!isValid && value !== '' || (input.hasAttribute('required') && !isValid)) {
            showError(input, validator.message);
            return false;
        } else {
            clearError(input);
            return true;
        }
    }

    // Real-time validation on blur
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('invalid')) {
                validateField(this);
            }
        });
    });

    // ===========================
    // Form Submission Handler
    // ===========================
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate all fields
        let isValid = true;
        formInputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            // Scroll to first error
            const firstError = contactForm.querySelector('.invalid');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
            return;
        }

        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending<span class="spinner"></span>';

        // Prepare form data
        const formData = new FormData(contactForm);

        // Submit form using fetch API
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Redirect to thank you page
                window.location.href = 'thank-you.html';
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Sorry, there was an error submitting your message. Please try again or email us directly at info@lavanyainfotechltd.com');

            // Restore button state
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        });
    });

    // ===========================
    // Intersection Observer for Animations
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all section elements for fade-in animation
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });

    // ===========================
    // Keyboard Navigation Enhancement
    // ===========================
    document.addEventListener('keydown', function(e) {
        // Escape key closes mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ===========================
    // Performance: Preload Contact Form Endpoint
    // ===========================
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = 'https://formspree.io';
    document.head.appendChild(link);

    // ===========================
    // Analytics Event Tracking (Ready for GA)
    // ===========================
    function trackEvent(category, action, label) {
        // When Google Analytics is added, uncomment:
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', action, {
        //         'event_category': category,
        //         'event_label': label
        //     });
        // }
        console.log('Event:', category, action, label);
    }

    // Track CTA button clicks
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('Engagement', 'CTA Click', this.textContent.trim());
        });
    });

    // Track service card interactions
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            const serviceName = this.querySelector('h3').textContent;
            trackEvent('Services', 'Card Click', serviceName);
        });
    });

    // ===========================
    // Console Message
    // ===========================
    console.log('%c Lavanya Infotech Limited ', 'background: #007BFF; color: white; font-size: 16px; padding: 10px;');
    console.log('%c Test Automation & RPA Solutions ', 'color: #64ffda; font-size: 14px;');
    console.log('%c www.lavanyainfotechltd.com ', 'color: #bb86fc; font-size: 12px;');

})();
