// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// Smooth Scrolling for Anchor Links
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

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.nombre || !data.email || !data.mensaje) {
                showMessage('Por favor, complete todos los campos obligatorios.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showMessage('Por favor, ingrese un email válido.', 'error');
                return;
            }
            
            // Simulate form submission
            showMessage('Enviando mensaje...', 'info');
            
            // Simulate API call
            setTimeout(() => {
                showMessage('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.', 'success');
                contactForm.reset();
            }, 2000);
        });
    }
});

// Message Display Function
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    
    // Style the message
    messageDiv.style.cssText = `
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 5px;
        font-weight: 500;
        text-align: center;
        ${getMessageStyles(type)}
    `;
    
    // Insert message before form
    const form = document.getElementById('contactForm');
    if (form) {
        form.parentNode.insertBefore(messageDiv, form);
        
        // Auto-remove message after 5 seconds
        setTimeout(() => {
            if (messageDiv) {
                messageDiv.remove();
            }
        }, 5000);
    }
}

function getMessageStyles(type) {
    switch(type) {
        case 'success':
            return 'background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;';
        case 'error':
            return 'background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;';
        case 'info':
            return 'background-color: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb;';
        default:
            return 'background-color: #f8f9fa; color: #333; border: 1px solid #dee2e6;';
    }
}

// Intersection Observer for Animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Add fade-in class to cards and sections for animation
    document.querySelectorAll('.product-card, .service-card, .brand-card, .sector-card, .feature-item, .value-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Stats Counter Animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/\D/g, ''));
        const suffix = stat.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + suffix;
        }, 40);
    });
}

// Trigger stats animation when stats section is visible
document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }
});

// Header Background Change on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(26, 35, 126, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '';
            header.style.backdropFilter = '';
        }
    }
});

// Add loading animation to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Don't add loading to external links or phone/email links
            if (this.href && (this.href.startsWith('tel:') || this.href.startsWith('mailto:') || this.href.includes('#'))) {
                return;
            }
            
            // Add loading state
            this.style.position = 'relative';
            this.style.pointerEvents = 'none';
            
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando...';
            
            // Remove loading after navigation (for demo purposes)
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.pointerEvents = '';
            }, 1000);
        });
    });
});

// Search functionality for brands page (if needed)
function initBrandSearch() {
    const searchInput = document.getElementById('brandSearch');
    const brandCards = document.querySelectorAll('.brand-card');
    
    if (searchInput && brandCards.length > 0) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            brandCards.forEach(card => {
                const brandName = card.querySelector('.brand-logo').textContent.toLowerCase();
                const brandDescription = card.querySelector('p').textContent.toLowerCase();
                
                if (brandName.includes(searchTerm) || brandDescription.includes(searchTerm)) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// Initialize search on brands page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('marcas.html')) {
        initBrandSearch();
    }
});

// Utility function to validate Chilean phone numbers
function validateChileanPhone(phone) {
    // Chilean mobile: +56 9 XXXX XXXX or 9 XXXX XXXX
    const mobileRegex = /^(\+56\s?)?9\s?\d{4}\s?\d{4}$/;
    // Chilean landline: +56 X XXXX XXXX (X = area code)
    const landlineRegex = /^(\+56\s?)?[2-7]\s?\d{4}\s?\d{4}$/;
    
    return mobileRegex.test(phone) || landlineRegex.test(phone);
}

// Enhanced form validation
function validateForm(formData) {
    const errors = [];
    
    // Required fields
    if (!formData.nombre.trim()) {
        errors.push('El nombre es obligatorio');
    }
    
    if (!formData.email.trim()) {
        errors.push('El email es obligatorio');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.push('El email no es válido');
    }
    
    if (!formData.mensaje.trim()) {
        errors.push('El mensaje es obligatorio');
    } else if (formData.mensaje.trim().length < 10) {
        errors.push('El mensaje debe tener al menos 10 caracteres');
    }
    
    // Optional phone validation
    if (formData.telefono && !validateChileanPhone(formData.telefono)) {
        errors.push('El teléfono no tiene un formato válido');
    }
    
    return errors;
}

// Enhanced contact form with better validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validate form
            const errors = validateForm(data);
            
            if (errors.length > 0) {
                showMessage(errors.join('<br>'), 'error');
                return;
            }
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitButton.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                showMessage('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.', 'success');
                contactForm.reset();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
});

// Add tooltips for better UX
function initTooltips() {
    const elements = document.querySelectorAll('[data-tooltip]');
    
    elements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: #333;
                color: white;
                padding: 0.5rem;
                border-radius: 4px;
                font-size: 0.875rem;
                z-index: 1000;
                pointer-events: none;
                white-space: nowrap;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            
            this._tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                this._tooltip.remove();
                this._tooltip = null;
            }
        });
    });
}

// Initialize tooltips
document.addEventListener('DOMContentLoaded', initTooltips);

// Performance optimization: Lazy load images if any
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Add print styles for better printing experience
function addPrintStyles() {
    const printStyles = `
        @media print {
            .header, .footer, .hamburger, .hero-buttons, .cta-section, .social-links {
                display: none !important;
            }
            
            body {
                font-size: 12pt;
                line-height: 1.4;
            }
            
            .container {
                max-width: none;
                padding: 0;
            }
            
            .page-header {
                background: none !important;
                color: #000 !important;
                padding: 20px 0;
            }
            
            .brand-card, .product-card, .service-card {
                break-inside: avoid;
                margin-bottom: 10px;
                border: 1px solid #ddd;
            }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = printStyles;
    document.head.appendChild(style);
}

// Add print styles
document.addEventListener('DOMContentLoaded', addPrintStyles);

console.log('COMERCIAL ITECC SPA - Website loaded successfully!');
