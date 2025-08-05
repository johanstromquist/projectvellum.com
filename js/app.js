// Project Vellum Marketing Site - Interactive Magic
document.addEventListener('DOMContentLoaded', function() {
    init();
});

function init() {
    setupLoadingScreen();
    setupNavigation();
    setupMobileMenu();
    setupSmoothScrolling();
    setupScrollEffects();
    setupVideoOptimization();
    setupSubscribeForm();
    setupStoreLinks();
}

// Loading Screen
function setupLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Wait for page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
        }, 800);
    });
}

// Navigation functionality
function setupNavigation() {
    const nav = document.querySelector('.nav-main');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// Mobile Menu
function setupMobileMenu() {
    const toggle = document.querySelector('.nav-mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.nav-main').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll-based animations
function setupScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add stagger effect for grid items
                if (entry.target.classList.contains('world-card') || 
                    entry.target.classList.contains('release-card') ||
                    entry.target.classList.contains('store-item')) {
                    const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100;
                    entry.target.style.transitionDelay = `${delay}ms`;
                }
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    const elements = document.querySelectorAll('section:not(.hero), .world-card, .release-card, .store-item');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
}

// Video Optimization for Mobile
function setupVideoOptimization() {
    const video = document.querySelector('.hero-video');
    if (!video) return;

    // Detect mobile and load appropriate video
    const isMobile = window.innerWidth <= 768;
    const videoSource = video.querySelector('source');
    
    if (isMobile) {
        // Already using mobile video
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
    } else {
        // Switch to higher resolution for desktop
        const currentSrc = videoSource.src;
        const desktopSrc = currentSrc.replace('720x1280', '1080x1920');
        
        // Check if desktop version exists
        fetch(desktopSrc, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    videoSource.src = desktopSrc;
                    video.load();
                }
            })
            .catch(() => {
                // Keep mobile version if desktop doesn't exist
            });
    }

    // Ensure video plays on mobile
    video.addEventListener('loadeddata', () => {
        video.play().catch(() => {
            // Autoplay blocked, show play button overlay
            console.log('Autoplay blocked');
        });
    });
}

// Subscribe form handling
function setupSubscribeForm() {
    const form = document.querySelector('.subscribe-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        const button = form.querySelector('button');
        const originalText = button.textContent;
        
        // Show loading state
        button.textContent = 'Joining the shadows...';
        button.disabled = true;
        
        // Simulate API call (replace with actual endpoint)
        try {
            // In production, this would be your actual API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            form.innerHTML = `
                <p class="subscribe-success">
                    Welcome to the eternal chronicle. 
                    Check your email for a message from the shadows.
                </p>
            `;
        } catch (error) {
            button.textContent = originalText;
            button.disabled = false;
            alert('An error occurred. Please try again.');
        }
    });
}

// Store Links Setup
function setupStoreLinks() {
    const storeLinks = document.querySelectorAll('[data-product]');
    
    storeLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const product = link.dataset.product;
            
            // Map products to actual store URLs
            const productUrls = {
                'asphodels-hardcover': 'https://www.lulu.com/shop/your-book-url',
                'lictor-journal': 'https://www.lulu.com/shop/your-journal-url',
                'skull-pin': 'https://your-printful-store.com/skull-pin',
                'shadow-tee': 'https://your-printful-store.com/shadow-tee'
            };
            
            const url = productUrls[product];
            if (url) {
                window.open(url, '_blank');
            } else {
                // Placeholder for products not yet available
                alert('This product will be available soon. Join our mailing list for updates!');
            }
        });
    });
}

// Parallax effect for sections with backdrops
function setupParallax() {
    const parallaxElements = document.querySelectorAll('.world-backdrop, .subscribe-backdrop');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(el => {
            const rate = scrolled * -0.5;
            el.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Initialize parallax on desktop only
if (window.innerWidth > 768) {
    setupParallax();
}

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const toggle = document.querySelector('.nav-mobile-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (mobileMenu.classList.contains('active')) {
            toggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});