// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Navigation Toggle - WITH NULL CHECKS
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a nav link
        if (navItems.length > 0) {
            navItems.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
        }
    } else {
        console.log('ℹ️ Mobile navigation elements not found (expected on desktop)');
    }

    // Back to Top Button - WITH NULL CHECK
    const backToTop = document.querySelector('.back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        console.log('ℹ️ Back to top button not found');
    }

    // Contact Form Submission - WITH ENHANCED ERROR HANDLING
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    console.log('🔍 Debug: Contact form element:', contactForm);
    console.log('🔍 Debug: Form status element:', formStatus);

    // Enhanced CSS for status messages
    const statusStyles = document.createElement('style');
    statusStyles.textContent = `
        .form-status {
            margin-top: 15px;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            font-weight: 500;
            transition: all 0.3s ease;
            display: block !important;
        }
        
        .form-status.success {
            background: rgba(76, 175, 80, 0.2);
            border: 2px solid #4CAF50;
            color: #4CAF50;
        }
        
        .form-status.error {
            background: rgba(244, 67, 54, 0.2);
            border: 2px solid #f44336;
            color: #f44336;
        }
        
        .form-status.loading {
            background: rgba(33, 150, 243, 0.2);
            border: 2px solid #2196F3;
            color: #2196F3;
        }
        
        .form-status:empty {
            display: none;
        }
    `;
    document.head.appendChild(statusStyles);

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            console.log('✅ Form submitted! Starting submission process...');

            const submitButton = contactForm.querySelector('button[type="submit"]');
            if (!submitButton) {
                console.error('❌ Submit button not found!');
                return;
            }

            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            formStatus.textContent = 'Sending your message...';
            formStatus.className = 'form-status loading';
            formStatus.style.display = 'block';

            try {
                // Get form data
                const formData = new FormData(contactForm);
                
                // Add required fields for Web3Forms
                formData.append('subject', 'New Message from Portfolio Website');
                formData.append('from_name', 'Portfolio Contact Form');
                
                // Log what we're sending for debugging
                console.log('📤 FormData contents:');
                for (let [key, value] of formData.entries()) {
                    console.log(`  ${key}: ${value}`);
                }

                console.log('🔄 Sending to Web3Forms API...');
                
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                console.log('📥 Response status:', response.status);
                console.log('📥 Response ok:', response.ok);

                const data = await response.json();
                console.log('📦 Full response data:', data);
                
                if (response.ok && data.success) {
                    // SUCCESS
                    console.log('🎉 Form submitted successfully!');
                    formStatus.textContent = '✅ Message sent successfully! I will get back to you ASAP.';
                    formStatus.className = 'form-status success';
                    contactForm.reset();
                    
                    // Keep message visible for 5 seconds, then fade out
                    setTimeout(() => {
                        formStatus.textContent = '';
                        formStatus.className = '';
                        formStatus.style.display = 'none';
                    }, 5000);
                    
                } else {
                    // ERROR
                    console.error('❌ Form submission failed:', data);
                    const errorMessage = data.message || 'Something went wrong. Please try again.';
                    formStatus.textContent = `❌ ${errorMessage}`;
                    formStatus.className = 'form-status error';
                }
            } catch (error) {
                // NETWORK ERROR
                console.error('🌐 Network error:', error);
                formStatus.textContent = '❌ Network error. Please check your connection and try again.';
                formStatus.className = 'form-status error';
            } finally {
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                console.log('🔄 Form submission process completed');
            }
        });
        
        console.log('✅ Form event listener attached successfully');
    } else {
        console.error('❌ Contact form or status element not found!');
        if (!contactForm) console.error('   - Contact form with ID "contactForm" not found');
        if (!formStatus) console.error('   - Form status with ID "formStatus" not found');
    }

    // Smooth Scroll for Navigation Links - WITH NULL CHECK
    const navAnchors = document.querySelectorAll('a[href^="#"]');
    if (navAnchors.length > 0) {
        navAnchors.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Add scroll effect to navigation - WITH NULL CHECK
    const header = document.querySelector('header');
    if (header) {
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;
        });
    }

    // Add animation on scroll for cards - WITH NULL CHECK
    const cards = document.querySelectorAll('.card, .skill-item');
    if (cards.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
        
        console.log(`✅ Animations applied to ${cards.length} cards`);
    }

    console.log('✅ Navigation.js loaded successfully');
});